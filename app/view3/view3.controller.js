angular.module('myApp')

.controller('View3Ctrl', function($scope) {
  $scope.dadosFormCorrida = {};
  
  $scope.enviaForm = function(form)  {
    console.log($scope.dadosFormCorrida, "dados do form de corrida")
  }
})