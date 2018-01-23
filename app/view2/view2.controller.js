angular.module('myApp')
.controller('View2Ctrl', function($scope) {
$scope.dadosForm = {};

$scope.enviaForm = function() {
  console.log($scope.dadosForm, "dados do form")
}
});