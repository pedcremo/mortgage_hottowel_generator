/**
 * mortgageCalculator - mortgageCalculator Project Generated from HotTowel Angular
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["app.core","app.widgets","app.login","app.admin","app.dashboard","app.contact","app.hipoteca","app.layout"])}(),function(){"use strict";angular.module("app.admin",["app.core","app.widgets"])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.contact",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.exception","blocks.logger","blocks.router","ui.router","ngplus","LocalStorageModule","firebase"])}(),function(){"use strict";angular.module("app.dashboard",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.hipoteca",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.layout",["app.core","ui.bootstrap","ui.bootstrap.collapse"])}(),function(){"use strict";angular.module("app.login",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.widgets",["uiGmapgoogle-maps"])}(),function(){"use strict";function e(e){function t(){e.info("Activated Admin View")}var o=this;o.title="Admin",t()}angular.module("app.admin").controller("AdminController",e),e.$inject=["logger"]}(),function(){"use strict";function e(e,o){e.configureStates(t(o))}function t(e){return[{state:"admin",config:{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminController",controllerAs:"vm",title:"Admin",settings:{nav:3,content:'<i class="fa fa-lock"></i> Admin'},resolve:{loggedin:e.checkLoggedin}}}]}angular.module("app.admin").run(e),e.$inject=["routerHelper","dataservice"]}(),function(){"use strict";function e(){this.config={appErrorPrefix:void 0},this.configure=function(e){this.config.appErrorPrefix=e},this.$get=function(){return{config:this.config}}}function t(e){e.decorator("$exceptionHandler",o)}function o(e,t,o){return function(a,i){var n=t.config.appErrorPrefix||"",s={exception:a,cause:i};a.message=n+a.message,e(a,i),o.error(a.message,s)}}angular.module("blocks.exception").provider("exceptionHandler",e).config(t),t.$inject=["$provide"],o.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function e(e,t){function o(o){return function(a){var i,n;return a.data&&a.data.description&&(i="\n"+a.data.description,n=o+i),a.data.description=n,t.error(n),e.reject(a)}}var a={catcher:o};return a}e.$inject=["$q","logger"],angular.module("blocks.exception").factory("exception",e)}(),function(){"use strict";function e(e,t){function o(o,a,i){t.error(o,i),e.error("Error: "+o,a)}function a(o,a,i){t.info(o,i),e.info("Info: "+o,a)}function i(o,a,i){t.success(o,i),e.info("Success: "+o,a)}function n(o,a,i){t.warning(o,i),e.warn("Warning: "+o,a)}var s={showToasts:!0,error:o,info:a,success:i,warning:n,log:e.log};return s}angular.module("blocks.logger").factory("logger",e),e.$inject=["$log","toastr"]}(),function(){"use strict";function e(e,t,o){function a(e,a,n,s){function r(e,a){e.forEach(function(e){e.config.resolve=angular.extend(e.config.resolve||{},i.resolveAlways),t.state(e.state,e.config)}),a&&!g&&(g=!0,o.otherwise(a))}function l(){a.$on("$stateChangeError",function(t,o,a,i,n,r){if(!p){m.errors++,p=!0;var l=o&&(o.title||o.name||o.loadedTemplateUrl)||"unknown target",c="Error routing to "+l+". "+(r.data||"")+". <br/>"+(r.statusText||"")+": "+(r.status||"");s.warning(c,[o]),e.path("/")}})}function c(){l(),u()}function d(){return n.get()}function u(){a.$on("$stateChangeSuccess",function(e,t,o,n,s){m.changes++,p=!1;var r=i.docTitle+" "+(t.title||"");a.title=r})}var p=!1,g=!1,m={errors:0,changes:0},f={configureStates:r,getStates:d,stateCounts:m};return c(),f}var i={docTitle:void 0,resolveAlways:{}};window.history&&window.history.pushState||(window.location.hash="/"),e.html5Mode(!0),this.configure=function(e){angular.extend(i,e)},this.$get=a,a.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",e),e.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function e(e,t,o){function a(){var t=[i(),n()];return e.all(t).then(function(){o.info("Activated contact View")})}function i(){return t.getMessageCount().then(function(e){return s.messageCount=e,s.messageCount})}function n(){return t.getPeople().then(function(e){return s.people=e,s.people})}var s=this;s.news={title:"Mortgage Calculator",description:"Hot Towel Angular is a SPA template for Angular developers."},s.messageCount=0,s.people=[],s.title="Contact",a()}angular.module("app.contact").controller("ContactController",e),e.$inject=["$q","dataservice","logger"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"contact",config:{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"vm",title:"contact",settings:{nav:4,content:'<i class="fa fa-address-card-o"></i> CContact'}}}]}angular.module("app.contact").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.options.timeOut=4e3,e.options.positionClass="toast-bottom-right"}function t(e,t,o){e.debugEnabled&&e.debugEnabled(!0),o.configure(a.appErrorPrefix),t.configure({docTitle:a.appTitle+": "})}var o=angular.module("app.core");o.config(e),e.$inject=["toastr"];var a={appErrorPrefix:"[mortgageCalculator Error] ",appTitle:" Mortgage Calculator"};o.value("config",a),o.config(t),t.$inject=["$logProvider","routerHelperProvider","exceptionHandlerProvider"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e){var o="/404";e.configureStates(t(),o)}function t(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}}]}e.$inject=["routerHelper"],angular.module("app.core").run(e)}(),function(){"use strict";function e(e,t,o,a,i,n,s,r){function l(){var e=i.defer();return c().then(function(t){e.resolve(t.length)},function(t){e.reject(t)}),e.promise}function c(){function e(e){return e.data}function t(e){return n.catcher("XHR Failed for getPeople")(e)}return a.get("/api/people").then(e)["catch"](t)}function d(){function o(o){"0"===o.data?(e.authUser=!1,t.go("login")):e.authUser=o.data}function i(e){return n.catcher("XHR Failed for /api/loggedin")(e)}return a.get("/api/loggedin").then(o)["catch"](i)}function u(){function t(t){return"0"===t.data?(e.authUser=!1,!1):(e.authUser=t.data,t.data)}function o(e){return n.catcher("XHR Failed for /api/loggedin")(e)}return a.get("/api/loggedin").then(t)["catch"](o)}function p(){return a({url:"/api/logout",method:"POST"}).then(function(o){console.log("OKKK:"+o),e.authUser=!1,t.go("/")},function(e){console.log("ERRRRROR: "+e)})}function g(){var e=i.defer();return o.navigator.geolocation?o.navigator.geolocation.getCurrentPosition(function(t){var o=[];c().then(function(e){e.forEach(function(e){var t={latitude:parseInt(e.latitude),longitude:parseInt(e.longitude),icon:"images/icon_lawyer.png",info:e.firstName+" "+e.lastName+"<br>Age: "+e.age+"<br>Location:"+e.location,id:e.id};o.push(t)});var a={id:51,latitude:t.coords.latitude,longitude:t.coords.longitude};o.push(a)}),e.resolve(o)},function(t){e.reject(t)}):e.reject("Geolocation not supported."),e.promise}var m={getPeople:c,getMessageCount:l,getCurrentPosition:g,checkLoggedin:d,isLoggedin:u,logout:p};return m}angular.module("app.core").factory("dataservice",e).config(["$httpProvider",function(e){var t={apiKey:"AIzaSyA6b-K_LzG0Lt3OPmwbxlYe1FW67CXbrPY",authDomain:"mortgage-calculator.firebaseapp.com",databaseURL:"https://mortgage-calculator.firebaseio.com",storageBucket:"firebase-mortgage-calculator.appspot.com",messagingSenderId:"978656105531"};firebase.initializeApp(t),e.interceptors.push(["$q","$location",function(e,t){return{response:function(e){return e},responseError:function(o){return 401===o.status&&(console.log("TETETETETETET"),t.url("/login")),e.reject(o)}}}])}]),e.$inject=["$rootScope","$state","$window","$http","$q","exception","logger","localStorageService"]}(),function(){"use strict";function e(e,t,o,a,i,n){function s(){var e=[l(),c(),r()];return o.all(e).then(function(){i.info("Activated Dashboard View")})}function r(){return a.getCurrentPosition().then(function(e){return d.randomMarkers=e,d.randomMarkers})}function l(){return a.getMessageCount().then(function(e){return d.messageCount=e,d.messageCount})}function c(){return a.getPeople().then(function(e){return d.people=e,d.people})}var d=this;d.map={center:{latitude:39.5770969,longitude:-3.5280415},zoom:6},d.mortgageInfo={title:"Your Mortgages List simulations",description:"Preparing list"},a.isLoggedin().then(function(t){if(e.authUser=t,e.authUser&&e.authUser.id){var o=firebase.database().ref().child("hipotecas/"+e.authUser.id);d.mortgagesList=n(o)}}),d.messageCount=0,d.people=[],d.title="Dashboard",s()}angular.module("app.dashboard").controller("DashboardController",e),e.$inject=["$rootScope","$window","$q","dataservice","logger","$firebaseArray"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"dashboard",config:{url:"/",templateUrl:"app/dashboard/dashboard.html",controller:"DashboardController",controllerAs:"vm",title:"dashboard",settings:{nav:1,content:'<i class="fa fa-dashboard"></i> Dashboard'}}}]}angular.module("app.dashboard").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e,t,o,a,i,n,s,r,l){function c(){s.isLoggedin().then(function(o){if(e.authUser=o,e.authUser&&e.authUser.id){var i=firebase.database().ref().child("hipotecas/"+e.authUser.id);g.hipotecas=t(i),a.idHipoteca&&g.hipotecas.$loaded().then(function(e){g.hipoteca=e.$getRecord(a.idHipoteca),m="UPDATE"})["catch"](function(e){console.log("Error:",e)})}})}function d(){var e=parseFloat(g.hipoteca.dadesEconomiques.euribor)+parseFloat(g.hipoteca.dadesEconomiques.diferencial);"fixed"===g.hipoteca.dadesEconomiques.tipusInteres&&(e=parseFloat(g.hipoteca.dadesEconomiques.interesFixe)),g.hipoteca.dadesEconomiques.producteNomina&&(e-=.05),g.hipoteca.dadesEconomiques.producteSegurCasa&&(e-=.05),g.hipoteca.dadesEconomiques.producteSegurVida&&(e-=.05),g.hipoteca.interesAplicat=e.toLocaleString()+" %";var t=g.hipoteca.dadesEconomiques.capital*e/12/(100*(1-Math.pow(1+e/12/100,-1*g.hipoteca.dadesEconomiques.terminiAnys*12)));g.hipoteca.quotaMensual=t.toLocaleString()+" €",g.hipoteca.totalInteresos=(12*t*g.hipoteca.dadesEconomiques.terminiAnys-g.hipoteca.dadesEconomiques.capital).toLocaleString()+" €"}function u(){g.hipoteca.dadesEconomiques.interesFixe=void 0,g.hipoteca.dadesEconomiques.euribor=void 0,g.hipoteca.dadesEconomiques.diferencial=void 0}function p(){return i.mortgageForm.$valid?("NEW"===m?g.hipotecas.$add(g.hipoteca):g.hipotecas.$save(g.hipoteca),n.location.href="/",!0):(angular.forEach(i.mortgageForm.$error.required,function(e){e.$setDirty()}),!1)}var g=this,m="NEW";g.hipoteca={nif:"",nombre:"",ape1:"",ape2:"",edad:null,telefono:"",email:"",dadesEconomiques:{ingresosMensuals:null,capital:null,tipusInteres:"variable",euribor:null,diferencial:null,interesFixe:null,terminiAnys:null,producteSegurCasa:!1,producteNomina:!1,producteSegurVida:!1},quotaMensual:null,interesAplicat:null,totalInteresos:null},g.calcularHipoteca=d,g.resetValues=u,g.submitAndSaveHipoteca=p,c(),i.$watchCollection("vm.hipoteca.dadesEconomiques",function(){g.hipoteca.dadesEconomiques&&g.hipoteca.dadesEconomiques.capital&&g.hipoteca.dadesEconomiques.terminiAnys&&(g.hipoteca.dadesEconomiques.euribor&&g.hipoteca.dadesEconomiques.diferencial||g.hipoteca.dadesEconomiques.interesFixe)?g.calcularHipoteca():(g.hipoteca.quotaMensual=void 0,g.hipoteca.interesAplicat=void 0,g.hipoteca.totalInteresos=void 0)})}angular.module("app.hipoteca").controller("HipotecaController",e),e.$inject=["$rootScope","$firebaseArray","$q","$stateParams","$scope","$window","dataservice","localStorageService","logger"]}(),function(){"use strict";function e(e,o){e.configureStates(t(o))}function t(e){return[{state:"hipoteca",config:{url:"/hipoteca/nova",templateUrl:"app/hipoteca/hipoteca.html",controller:"HipotecaController",controllerAs:"vm",title:"hipoteca",settings:{nav:2,content:'<i class="fa fa-file"></i>New mortgage'},resolve:{loggedin:e.checkLoggedin}}},{state:"hipotecaEdit",config:{url:"/hipoteca/edit/:idHipoteca",templateUrl:"app/hipoteca/hipoteca.html",controller:"HipotecaController",controllerAs:"vm",title:"hipoteca edit",resolve:{loggedin:e.checkLoggedin}}}]}angular.module("app.hipoteca").run(e),e.$inject=["routerHelper","dataservice"]}(),function(){"use strict";function e(){function e(e){e.isCollapsed=!0}var t={bindToController:!0,controller:e,controllerAs:"vm",restrict:"EA",scope:{navline:"="},templateUrl:"app/layout/ht-top-nav.html"};return e.$inject=["$scope"],t}angular.module("app.layout").directive("htTopNav",e)}(),function(){"use strict";function e(e,t,o,a,i,n,s){function r(){l();var e=[c()];return t.all(e).then(function(){o.info("Activated layout View")})}function l(){g.navRoutes=m.filter(function(e){return e.settings&&e.settings.nav}).sort(function(e,t){return e.settings.nav-t.settings.nav})}function c(){return s.isLoggedin().then(function(t){return e.authUser=t,e.authUser})}function d(){return s.logout().then(function(t){return e.authUser=void 0,e.authUser})}function u(){i.go("login")}function p(e){if(!e.title||!i.current||!i.current.title)return"";var t=e.title;return i.current.title.substr(0,t.length)===t?"current":""}var g=this;g.logout=d,g.login=u;var m=n.getStates();g.isCurrent=p,r()}angular.module("app.layout").controller("MainMenuController",e),e.$inject=["$rootScope","$q","logger","$uibModal","$state","routerHelper","dataservice"]}(),function(){"use strict";function e(e,t,o,a){function i(){a.success(o.appTitle+" loaded!",null),n()}function n(){t(function(){e.showSplash=!1},1e3)}var s=this;s.busyMessage="Please wait ...",s.isBusy=!0,e.showSplash=!0,s.navline={title:o.appTitle,text:"Created by John Papa",link:"http://twitter.com/john_papa"},i()}angular.module("app.layout").controller("ShellController",e),e.$inject=["$rootScope","$timeout","config","logger"]}(),function(){"use strict";function e(e,t,o,a){function i(){t({url:"/api/login",method:"POST",data:{username:n.user.username,password:n.user.password}}).then(function(t){n.message="Authentication successful!",console.log("OKKK:"+t),e.authUser=t.user,o.go("admin")},function(e){n.error="Authentication failed.",console.log("ERRRRROR: "+e),o.go("login")})}var n=this;n.login=i}angular.module("app.layout").controller("LoginController",e),e.$inject=["$rootScope","$http","$state","$location"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"login",config:{url:"/login",templateUrl:"app/login/login-template.html",controller:"LoginController",controllerAs:"vm",title:"login"}}]}angular.module("app.layout").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";var e=angular.module("app.widgets");e.config(["uiGmapGoogleMapApiProvider",function(e){e.configure({key:"AIzaSyA6b-K_LzG0Lt3OPmwbxlYe1FW67CXbrPY",v:"3.26",libraries:"weather,geometry,visualization"})}])}(),function(){"use strict";function e(e){function t(e,t,i){i.$observe("htImgPerson",function(e){e=o+(e||a),i.$set("src",e)})}var o=e.imageBasePath,a=e.unknownPersonImageSource,i={link:t,restrict:"A"};return i}angular.module("app.widgets").directive("htImgPerson",e),e.$inject=["config"]}(),function(){"use strict";function e(){function e(e,t,o){e.toggleContent=function(){if("true"===e.allowCollapse){var o=angular.element(t).siblings(".widget-content");o.toggle()}}}var t={scope:{title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},templateUrl:"app/widgets/widget-header.html",restrict:"EA",link:e};return t}angular.module("app.widgets").directive("htWidgetHeader",e)}(),angular.module("app.core").run(["$templateCache",function(e){e.put("app/admin/admin.html",'<section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wviolet"><div ht-widget-header title={{vm.title}}></div><div class="widget-content user"><h3>Your Profile</h3>{{$root.authUser | json}}</div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/contact/contact.html",'<section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wred"><div ht-widget-header title={{vm.title}}></div><div class="widget-content user"><h3>TODO: Implement Your contact Features</h3></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/core/404.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class="fa fa-warning"></i></div><div class="datas-text pull-right"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class="widget wblue"><div ht-widget-header title="Page Not Found" allow-collapse=true></div><div class="widget-content text-center text-info"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/dashboard/dashboard.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-6><div class"col-md-12"><a ui-sref=hipoteca><div class="widget blightblue"><div class="widget-content text-center text-info" style=padding:2.5em><span class=bold style=color:white;font-size:1.8em;><i class="fa fa-money fa-lg"></i> ¿Do you have ground clause? Simulate your mortgage and get your money back!</span></div></div></a> <a ui-sref=hipoteca><div class="widget bblue"><div class="widget-content text-center text-info" style=padding:2.5em><span class=bold style=color:white;font-size:1.8em;><i class="fa fa-money fa-lg"></i> Recover set up mortgage costs too! There is judisprudence about it</span></div></div></a></div><div ng-hide=$root.authUser class"col-md-12"><a ui-sref=hipoteca><div class="widget bgreen"><div class="widget-content text-center text-info" style=padding:2.5em><span class=bold style=color:white;font-size:2.5em;><i class="fa fa-pencil fa-lg"></i> NEW SIMULATION</span></div></div></a></div><div ng-show=$root.authUser class="col-md-12 widget wgreen"><div ht-widget-header title={{vm.mortgageInfo.title}} allow-collapse=true></div><div class="widget-content text-center text-info"><table class="table table-condensed table-striped"><thead><tr><th>Id</th><th>Usuari</th><th>Capital</th><th>Tipus d\'interés</th><th>Quota</th><th>Borrar</th></tr></thead><tbody><tr ng-repeat="hipo in vm.mortgagesList"><td><a ui-sref="hipotecaEdit({idHipoteca: hipo.$id})">{{$index+1}}</a></td><td>{{$root.authUser.displayName}}</td><td>{{hipo.dadesEconomiques.capital|currency:\'€\'}}</td><td>{{hipo.interesAplicat}}</td><td>{{hipo.quotaMensual}}</td><td><a><i class="fa fa-trash-o" ng-click=vm.mortgagesList.$remove(hipo) aria-hidden=true></i></a></td></tr></tbody></table></div><div class=widget-foot><div class=clearfix></div></div></div></div><div class=col-md-6><div class="widget borange"><div class="widget-content text-center text-info" style=padding:2.5em><span class=bold style=color:white;font-size:1.8em;><i class="fa fa-balance-scale fa-lg"></i>&nbsp;{{vm.messageCount}} Mortgage Lawyers close to you. Get your money back faster</span></div></div><div class="widget-content text-center text-info"><ui-gmap-google-map center=vm.map.center zoom=vm.map.zoom><ui-gmap-markers models=vm.randomMarkers coords="\'self\'" icon="\'icon\'"><ui-gmap-windows show=show><div ng-non-bindable>{{info}}</div></ui-gmap-windows></ui-gmap-markers></ui-gmap-google-map></div></div></div></div></section></section>'),e.put("app/hipoteca/hipoteca.html",'<div class=col-md-12><div class="widget wviolet"><div ht-widget-header title="New Mortgage form" allow-collapse=true></div><div class="widget-content text-center text-info"><form name=mortgageForm novalidate method=POST class=form-horizontal id=formulario_products ng-submit=vm.submitAndSaveHipoteca()><div class=row><div class=col-sm-12><fieldset><legend class=text-info>Economic data</legend><div class="form-group required"><label class="control-label col-sm-6">MONTHLY INCOME:</label><div class=col-sm-6><input required ng-model=vm.hipoteca.dadesEconomiques.ingresosMensuals id=ingresosMensuals name=ingresosMensuals placeholder="Ingresos mensuales" type=number min=0 class=form-control> <span class=text-danger ng-show="mortgageForm.ingresosMensuals.$error.required && (mortgageForm.ingresosMensuals.$dirty || mortgageForm.ingresosMensuals.$touched)">El camp &eacute;s obligatori</span></div></div><div class="form-group required"><label class="control-label col-sm-6">CAPITAL:</label><div class=col-sm-6><input required ng-model=vm.hipoteca.dadesEconomiques.capital id=capital name=capital placeholder=capital type=number class=form-control> <span class=text-danger ng-show="mortgageForm.capital.$error.required && (mortgageForm.capital.$dirty || mortgageForm.capital.$touched)">El camp &eacute;s obligatori</span></div></div><div class="form-group required"><label class="control-label col-sm-6">INTEREST RATE</label><div class=col-sm-6><select ng-model=vm.hipoteca.dadesEconomiques.tipusInteres name=interest_rate_type id=interest_rate_type class=form-control ng-change=vm.resetValues()><option value=variable>variable</option><option value=fixed>fixed</option></select></div></div><div class=form-group ng-class="{required:vm.hipoteca.dadesEconomiques.tipusInteres===\'variable\'}"><label class="control-label col-sm-6">EURIBOR:</label><div class=col-sm-6><input ng-required="vm.hipoteca.dadesEconomiques.tipusInteres===\'variable\'" ng-model=vm.hipoteca.dadesEconomiques.euribor ng-disabled="vm.hipoteca.dadesEconomiques.tipusInteres===\'fixed\' || vm.hipoteca.dadesEconomiques.tipusInteres===undefined" id=euribor type=number name=euribor placeholder=euribor class=form-control> <span class=text-danger ng-show="mortgageForm.euribor.$error.required && (mortgageForm.euribor.$dirty || mortgageForm.euribor.$touched)">El camp &eacute;s obligatori</span></div></div><div class=form-group ng-class="{required:vm.hipoteca.dadesEconomiques.tipusInteres===\'variable\'}"><label class="control-label col-sm-6">DIFFERENTIAL:</label><div class=col-sm-6><input ng-required="vm.hipoteca.dadesEconomiques.tipusInteres===\'variable\'" ng-model=vm.hipoteca.dadesEconomiques.diferencial ng-disabled="vm.hipoteca.dadesEconomiques.tipusInteres===\'fixed\' || vm.hipoteca.dadesEconomiques.tipusInteres===undefined" id=differential type=number name=differential placeholder=differential class=form-control> <span class=text-danger ng-show="mortgageForm.differential.$error.required && (mortgageForm.differential.$dirty || mortgageForm.differential.$touched)">El camp &eacute;s obligatori</span></div></div><div class=form-group ng-class="{required:vm.hipoteca.dadesEconomiques.tipusInteres===\'fixed\'}"><label class="control-label col-sm-6">FIXED INTEREST RATE</label><div class=col-sm-6><input ng-required="vm.hipoteca.dadesEconomiques.tipusInteres===\'fixed\'" ng-model=vm.hipoteca.dadesEconomiques.interesFixe ng-disabled="vm.hipoteca.dadesEconomiques.tipusInteres===\'variable\' || vm.hipoteca.dadesEconomiques.tipusInteres===undefined" id=fixed_interest name=fixed_interest placeholder="Fixed interest rate" type=number class=form-control> <span class=text-danger ng-show="mortgageForm.fixed_interest.$error.required && (mortgageForm.fixed_interest.$dirty || mortgageForm.fixed_interest.$touched)">El camp &eacute;s obligatori</span></div></div><div class="form-group required"><label class="control-label col-sm-6">PERIOD</label><div class=col-sm-6><input ng-model=vm.hipoteca.dadesEconomiques.terminiAnys id=period required type=number name=period placeholder="How many years?" class=form-control> <span class=text-danger ng-show="mortgageForm.period.$error.required && (mortgageForm.period.$dirty || mortgageForm.period.$touched)">El camp &eacute;s obligatori</span></div></div></fieldset></div></div><div class=row><div class=col-sm-4><fieldset><legend class=text-info>Associated products</legend><div class=checkbox><label class="control-label col-sm-8">Home insurance</label><div class=col-sm-4><input ng-model=vm.hipoteca.dadesEconomiques.producteSegurCasa name=homeInsurance id=homeInsurance type=checkbox class=form-control></div></div><div class=checkbox><label class="control-label col-sm-8">Paysheet</label><div class=col-sm-4><input ng-model=vm.hipoteca.dadesEconomiques.producteNomina name=paysheet id=paysheet type=checkbox class=form-control></div></div><div class=checkbox><label class="control-label col-sm-8">Life insurance</label><div class=col-sm-4><input ng-model=vm.hipoteca.dadesEconomiques.producteSegurVida name=lifeInsurance id=lifeInsurance type=checkbox class=form-control></div></div></fieldset></div><div class=col-sm-4><fieldset><legend class=text-info>RESULTS</legend><div class=form-group><label class="control-label col-sm-6">Monthly quote</label><div class=col-sm-6><input ng-model=vm.hipoteca.quotaMensual id=monthlyQuote name=monthlyQuote readonly placeholder="Monthly quote" type=text class=form-control></div></div><div class=form-group><label class="control-label col-sm-6">Interest rate applied</label><div class=col-sm-6><input ng-model=vm.hipoteca.interesAplicat id=interestApplied name=interestApplied readonly placeholder="Interest Applied" type=text class=form-control></div></div><input name=send type=submit value="SAVE MORTGAGE INFO"></fieldset></div><div class=col-sm-4><h3>Interest paid: {{vm.hipoteca.totalInteresos}}</h3></div></div></form></div><div class=widget-foot><div class=clearfix></div></div></div></div>'),e.put("app/layout/ht-top-nav.html",'<nav class="navbar navbar-fixed-top navbar-inverse"><div class=navbar-header><a href="/" class=navbar-brand style=font-size:2em;color:white><i class="fa fa-home fa-lg"></i> {{vm.navline.title}}</a> <a class="btn navbar-btn navbar-toggle" ng-click="isCollapsed = !isCollapsed"><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class="navbar-collapse collapse" uib-collapse=isCollapsed><div class="pull-right navbar-logo"><ul class="nav navbar-nav pull-right" ng-controller="MainMenuController as vm"><li ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li><li ng-hide=$root.authUser ui-sref=login><a><i class="fa fa-sign-in"></i> Sign in</a></li><li ng-hide=$root.authUser><a target=_self href=api/loginFacebook><span class="fa fa-facebook fa-lg"></span></a></li><li ng-hide=$root.authUser><a target=_self href=api/loginTwitter><span class="fa fa-twitter fa-lg"></span></a></li><li id=userAuthInfo ng-show=$root.authUser><a><img src={{$root.authUser.photos[0].value}}> Welcome {{ $root.authUser.displayName}}</a></li><li id=logoutButton ng-show=$root.authUser><a target=_self href=api/logout><span class="fa fa-sign-out"></span>Logout</a></li></ul></div></div></nav>'),e.put("app/layout/shell.html",'<div ng-controller="ShellController as vm"><header class=clearfix><ht-top-nav navline=vm.navline></ht-top-nav></header><section id=content class=content><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=images/busy.gif><div class="page-spinner-message overlay-message">{{vm.busyMessage}}</div></div></section><footer><hr><p><span class="glyphicon glyphicon-heart"></span> Pere Crespo Molina</p></footer></div>'),e.put("app/login/login-template.html",'<div ng-view class=login-intro><div class=container><div class=omb_login><h3 class=omb_authTitle>Login or <a href=#>Sign up</a></h3><div class="row omb_row-sm-offset-3 omb_socialButtons"><div class="col-xs-4 col-sm-2"><a target=_self href=api/loginFacebook class="btn btn-block btn-social btn-facebook"><span class="fa fa-facebook"></span>Sing in Facebook</a></div><div class="col-xs-4 col-sm-2"><a target=_self href=api/loginTwitter class="btn btn-block btn-social btn-twitter"><span class="fa fa-twitter"></span>Sign in Twitter</a></div></div><div class="row omb_row-sm-offset-3 omb_loginOr"><div class="col-xs-12 col-sm-6"><hr class=omb_hrOr><span class=omb_spanOr>or</span></div></div><div class="row omb_row-sm-offset-3"><div class="col-xs-12 col-sm-6"><form class=omb_loginForm ng-submit=vm.login() autocomplete=off><div class=input-group><span class=input-group-addon><i class="fa fa-user"></i></span> <input type=text class=form-control ng-model=vm.user.username name=username placeholder="email address"></div><span class=help-block></span><div class=input-group><span class=input-group-addon><i class="fa fa-lock"></i></span> <input type=password class=form-control ng-model=vm.user.password name=password placeholder=Password></div><span class=help-block></span> <span ng-show=vm.error class=help-block>User or password error. Bad Credentials!</span> <button class="btn btn-lg btn-primary btn-block" type=submit>Login</button></form></div></div><div class="row omb_row-sm-offset-3"><div class="col-xs-12 col-sm-3"><label class><input type=checkbox value=remember-me>Remember Me</label></div><div class="col-xs-12 col-sm-3"><p class=omb_forgotPwd><a href=#>Forgot password?</a></p></div></div></div></div></div>'),e.put("app/widgets/widget-header.html",'<div class=widget-head ng-class="{\'collapsive\': allowCollapse === \'true\'}" ng-click=toggleContent()><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right"></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>')}]);