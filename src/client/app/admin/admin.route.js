(function() {
  'use strict';

  angular
    .module('app.admin')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates(routerHelper));
  }

  function getStates(routerHelper) {
    return [
      {
        state: 'admin',
        config: {
          url: '/admin',
          templateUrl: 'app/admin/admin.html',
          controller: 'AdminController',
          controllerAs: 'vm',
          title: 'PROFILE',
          /*settings: {
            nav: 3,
          },*/

          resolve:{
            loggedin: routerHelper.checkLoggedin
          }
        }
      }
    ];
  }
})();
