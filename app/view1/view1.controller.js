// 'use strict';

angular.module('myApp')

.controller('View1Ctrl', function($scope) {
    $scope.dadosPassageiro = {};

    $scope.enviaForm = function(form) {
        console.log($scope.dadosPassageiro, "Dados do passageiro")
    }

    $scope.nomesFamilia = [
        {name: 'Flávio Diniz Rossetto Junior', id: 1},
        {name: 'Carmen Rosa de Castro', id: 2},
        {name: 'Flavio Diniz Rossetto', id: 3},
        {name: 'Ana Lucia Ruiz Rossetto', id: 4},
        {name: 'Silvana Rosa de Castro', id: 5}
       ];

       $scope.nomesAmigos = [
        {name: 'Paloma', id: 1},
        {name: 'Gabriel', id: 2},
        {name: 'Sarah', id: 3},
        {name: 'Tcheissa', id: 4},
        {name: 'Brenno', id: 5}
       ];

});