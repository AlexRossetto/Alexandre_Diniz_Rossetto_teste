var myApp = angular.module('myApp', [
  'ui.router',
  'firebase',
  'ui.utils.masks',
  'rw.moneymask'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Cadastro-Passageiros');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('view1', {
            url: '/Cadastro-Passageiros',
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('view2', {
            url: '/Cadastro-Motoristas',
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'       
        })

        .state('view3', {
            url:'/Cadastro-Corridas',
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        })

});
