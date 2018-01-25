var myApp = angular.module('myApp', [
  'ui.router',
  'firebase'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view1');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('view1', {
            url: '/view1',
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('view2', {
            url: '/view2',
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'       
        })

        .state('view3', {
            url:'/view3',
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        })

});
