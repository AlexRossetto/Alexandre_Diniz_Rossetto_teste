angular.module('myApp')

.controller('passageiroCtrl', function($scope, $firebaseArray, $filter) {
    $scope.dadosPassageiro = {};

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

    $scope.errorDate = false;
    
    $scope.today = $filter('date')(new Date(),'yyyy-MM-dd');

    $scope.validate = (date) => {
        if (date == undefined) {
        $scope.errorDate = true;
        } else {
        $scope.errorDate = false;
        }
    }
    
    var ref = firebase.database().ref().child("Passageiros");

    $scope.passageiros = $firebaseArray(ref)

    $scope.enviaForm = (form) => {
        $scope.derp = new Date($scope.dadosPassageiro.nascimento)
        $scope.dadosPassageiro.nascimento = $filter('date')($scope.derp, "dd/MM/yyyy");        
        $scope.passageiros.$add({
            nome: $scope.dadosPassageiro.nome,
            dataNascimento: $scope.dadosPassageiro.nascimento,
            cpf: $scope.dadosPassageiro.cpf,
            sexo: $scope.dadosPassageiro.sexo
        }).then(() => {
            $scope.dadosPassageiro = {};
        }) 
    }
});