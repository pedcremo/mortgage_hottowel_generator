(function() {
    'use strict';

    angular
        .module('app.hipoteca')
        .controller('HipotecaController', HipotecaController);

    HipotecaController.$inject = ['$firebaseAuth','$firebaseArray','$q','$stateParams','$scope','$window','dataservice','localStorageService','logger'];

    /* @ngInject */
    function HipotecaController($firebaseAuth,$firebaseArray,$q,$stateParams,$scope,$window,dataservice,localStorageService,logger) {
        var vm = this;

        vm.authData = $firebaseAuth().$getAuth();
        var hipotecaState = 'NEW';
        var hipotecasRef = firebase.database().ref().child('hipotecas');
        vm.hipotecas = $firebaseArray(hipotecasRef);

        vm.hipoteca={
         nif:'',
         nombre:'',
         ape1:'',
         ape2:'',
         edad:null,
         telefono:'',
         email:'',

         dadesEconomiques:{
             ingresosMensuals:null,
             capital:null,
             tipusInteres:'variable',
             euribor:null,
             diferencial:null,
             interesFixe:null,
             terminiAnys:null,
             producteSegurCasa:false,
             producteNomina:false,
             producteSegurVida:false
         },

         quotaMensual:null,
         interesAplicat:null,
         totalInteresos:null
        };



        vm.calcularHipoteca = calcularHipoteca;
        vm.resetValues = resetValues;
        //vm.saveMortgage = saveMortgage;
        vm.submitAndSaveHipoteca = submitAndSaveHipoteca;

        activate();

        function activate() {
            //var promises = [];

            if($stateParams.idHipoteca){//UPDATE EXISTING MORTGAGE
                //promises=[getMortgagesFB($stateParams.idHipoteca)];
                vm.hipotecas.$loaded()
                .then(function(hipotecas) {
                        vm.hipoteca = hipotecas.$getRecord($stateParams.idHipoteca); // true
                        hipotecaState = 'UPDATE';
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
            }else{//NEW MORTGAGE USER AUTHENTICATED
                if (vm.authData) vm.hipoteca.nombre = vm.authData.displayName;
            }


        }

        /*function getMortgagesFB(idHipoteca) {
            //vm.hipoteca = dataservice.getMortgagesFB(idHipoteca);
            vm.hipoteca = dataservice.getMortgagesFB('-Kb2BBoaMo2-pcWKJJBS');
            return vm.hipoteca;
        }*/

        function calcularHipoteca(){
             var interesAplicat_=parseFloat(vm.hipoteca.dadesEconomiques.euribor)+parseFloat(vm.hipoteca.dadesEconomiques.diferencial);

             if (vm.hipoteca.dadesEconomiques.tipusInteres==='fixed'){
                 interesAplicat_=parseFloat(vm.hipoteca.dadesEconomiques.interesFixe);
             }
             if (vm.hipoteca.dadesEconomiques.producteNomina) {interesAplicat_-=0.05;}
             if (vm.hipoteca.dadesEconomiques.producteSegurCasa){interesAplicat_-=0.05;}
             if (vm.hipoteca.dadesEconomiques.producteSegurVida) {interesAplicat_-=0.05;}

             vm.hipoteca.interesAplicat=interesAplicat_.toLocaleString()+' %';

             var quota=((vm.hipoteca.dadesEconomiques.capital*interesAplicat_)/12) / (100*(1-Math.pow(1+((interesAplicat_/12)/100),(-1)*vm.hipoteca.dadesEconomiques.terminiAnys*12)));
             vm.hipoteca.quotaMensual=quota.toLocaleString()+' €';
             vm.hipoteca.totalInteresos=((quota*12*vm.hipoteca.dadesEconomiques.terminiAnys)-vm.hipoteca.dadesEconomiques.capital).toLocaleString()+' €';
        }

        function resetValues(){
              vm.hipoteca.dadesEconomiques.interesFixe=undefined;
              vm.hipoteca.dadesEconomiques.euribor=undefined;
              vm.hipoteca.dadesEconomiques.diferencial=undefined;
        }

        /*function saveMortgage(){
            localStorageService.set('hipotecas', vm.hipotecas);
        }*/

        function submitAndSaveHipoteca(){
             if(! $scope.mortgageForm.$valid){
                 angular.forEach($scope.mortgageForm.$error.required, function(field) {
                   field.$setDirty();
                 });
                 return false;
             }else{
               /*vm.json = angular.toJson(vm.hipoteca);
               vm.hipotecas = localStorageService.get('hipotecas') || [];

               if (vm.hipoteca.idHipoteca===null || vm.hipoteca.idHipoteca===undefined){ //Si es hipoteca nova
                 vm.hipoteca.idHipoteca=vm.hipotecas.length;
                 vm.hipotecas.push(vm.hipoteca);
               }else{ //Si estem editant una vella
                 vm.hipotecas[vm.hipoteca.idHipoteca]=vm.hipoteca;
               }
               vm.saveMortgage();*/
               //dataservice.addMortgage(vm.hipoteca);
               if (hipotecaState === "NEW"){
                vm.hipotecas.$add(vm.hipoteca);
               }else{
                vm.hipotecas.$save(vm.hipoteca);
               }
               $window.location.href ='/';

               return true;
             }
         }
         $scope.$watchCollection(
                   'vm.hipoteca.dadesEconomiques',
                   //function( newValue, oldValue ) {
                   function(){
                       if (vm.hipoteca.dadesEconomiques &&
                           vm.hipoteca.dadesEconomiques.capital  &&
                           vm.hipoteca.dadesEconomiques.terminiAnys &&
                           ((vm.hipoteca.dadesEconomiques.euribor &&
                               vm.hipoteca.dadesEconomiques.diferencial) ||
                               vm.hipoteca.dadesEconomiques.interesFixe) ){
                         vm.calcularHipoteca();
                       }else{
                         vm.hipoteca.quotaMensual=undefined;
                         vm.hipoteca.interesAplicat=undefined;
                         vm.hipoteca.totalInteresos=undefined;
                       }
                   }
         );
         /*$scope.$watch('vm.hipoteca.dadesEconomiques.capital', function(current, original) {
             logger.info('vm.hipoteca.capital was %s', original);
             logger.info('vm.hipoteca.capital is now %s', current);
        });*/
    }
})();
