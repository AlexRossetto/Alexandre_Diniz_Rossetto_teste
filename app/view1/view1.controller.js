angular.module('myApp')

.controller('View1Ctrl', function($scope, $firebaseArray, $filter) {
    $scope.dadosPassageiro = {};

    // console.log($scope.passageiros, "dados dos passageiros")

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
    

    var ref = firebase.database().ref().child("Passageiros");

    $scope.passageiros = $firebaseArray(ref);

    $scope.enviaForm = (form) => {
        // $scope.derp = new Date($scope.dadosPassageiro.nascimento)
        $scope.dadosPassageiro.nascimento = $filter('date')($scope.derp, "dd/MM/yyyy");        
        // console.log($scope.dadosPassageiro, "Dados do passageiro")
        $scope.passageiros.$add({
            nome: $scope.dadosPassageiro.nome,
            dataNascimento: $scope.dadosPassageiro.nascimento,
            cpf: $scope.dadosPassageiro.cpf,
            sexo: $scope.dadosPassageiro.sexo
        }).then(() => {
            $scope.dadosPassageiro = ''
        }) 
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