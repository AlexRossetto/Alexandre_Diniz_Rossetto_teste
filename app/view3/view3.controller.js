angular.module('myApp')

.controller('View3Ctrl', function($scope, $firebaseArray) {
  $scope.dadosFormCorrida = {};

  var config = {
    apiKey: "AIzaSyA9WYf-MslurKPSkxSqOOB3cne5KKuDu_s",
    authDomain: "teste-web-80f4c.firebaseapp.com",
    databaseURL: "https://teste-web-80f4c.firebaseio.com",
    projectId: "teste-web-80f4c",
    storageBucket: "",
    messagingSenderId: "730238780762"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }


  var refMotor = firebase.database().ref().child("Motoristas");

  var refPass = firebase.database().ref().child("Passageiros");

  var refCorrida = firebase.database().ref().child("Corridas");
  
  $scope.corridas = $firebaseArray(refCorrida);

  var teste = refMotor.orderByChild("status").equalTo(1);

  $scope.motoristas = $firebaseArray(teste);

  $scope.passageiros = $firebaseArray(refPass);
  
  console.log($scope.motoristas)

  $scope.enviaForm = (form) => {      
    console.log($scope.dadosFormCorrida, "Dados do passageiro")
    $scope.corridas.$add({
        idMotorista: $scope.dadosFormCorrida.motorista.$id,
        nomeMotorista: $scope.dadosFormCorrida.motorista.nome,
        idPassageiro: $scope.dadosFormCorrida.passageiro.$id,
        nomePassageiro: $scope.dadosFormCorrida.passageiro.nome,
        valorCorrida: $scope.dadosFormCorrida.valor,
    }).then(() => {
        $scope.dadosFormCorrida = ''
    }) 
}
})