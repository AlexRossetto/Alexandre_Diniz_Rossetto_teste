angular.module('myApp')
.controller('motoristaCtrl', function($scope, $firebaseArray, $filter) {
$scope.dadosForm = {};

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


    var ref = firebase.database().ref().child("Motoristas");

    $scope.motoristas = $firebaseArray(ref);

    $scope.enviaForm = (form) => {
        $scope.derp = new Date($scope.dadosForm.nascimento)
        $scope.dadosForm.nascimento = $filter('date')($scope.derp, "dd/MM/yyyy");        
        $scope.motoristas.$add({
            nome: $scope.dadosForm.nome,
            dataNascimento: $scope.dadosForm.nascimento,
            cpf: $scope.dadosForm.cpf,
            sexo: $scope.dadosForm.sexo,
            modeloCarro: $scope.dadosForm.modeloCarro,
            status: 1
        }).then(() => {
            $scope.dadosForm = {};
        }) 
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
    

    $scope.updateStatus = (motorista) => {
       var id = motorista.$id

      var record = $scope.motoristas.$getRecord(id)

      if(record.status == 1) {
        record.status = 0
      } else {
        record.status = 1
      }

      $scope.motoristas.$save(record);
    }
});