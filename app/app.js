var myApp = angular.module('myApp', [
  'ui.router',
  'firebase',
  'ui.utils.masks',
  'rw.moneymask'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Passageiros');

    $stateProvider

        .state('Passageiros', {
            url: '/Passageiros',
            templateUrl: 'views/Passageiro/Passageiro.view.html',
            controller: 'passageiroCtrl'
        })

        .state('Motoristas', {
            url: '/Motoristas',
            templateUrl: 'views/Motorista/Motorista.view.html',
            controller: 'motoristaCtrl'       
        })

        .state('Corridas', {
            url:'/Corridas',
            templateUrl: 'views/Corrida/Corrida.view.html',
            controller: 'corridaCtrl'
        })

});
