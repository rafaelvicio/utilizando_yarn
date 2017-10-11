angular.module("minhaPizza")
    .controller("novoSaborCtrl", ['$scope', '$routeParams', 'nomesFactory', function($scope, $routeParams, nomesFactory){

    $scope.pizza = {
      nome: $routeParams.nome,
      formato: "Redonda",
      local: "Local",
      endereco: "",
      ingredientes: [],
      total: 0
    };

    $scope.Ingrediente = {
      novo: "",
      inserir: function(){
        $scope.pizza.ingredientes.push(this.novo);
        this.novo = "";
      },
      remover: function(indice){
        $scope.pizza.ingredientes.splice(indice, 1);
      }
    };

    $scope.formatoPizza = function(){
      return 'pizza-formato' + ($scope.pizza.formato === "Redonda" ? "pizza-redonda" : "pizza-quadrada");
    };

    $scope.precoPizza = function(){
      var total = $scope.pizza.ingredientes.length * 1.5;
      total += ($scope.pizza.formato === 'Redonda' ? 2 : 5);
      total += ($scope.pizza.formato === 'Quadrada' ? 5 : 0);
      return total;
    };

    $scope.nomeAleatorio = function(){
      $scope.pizza.nome = nomesFactory();
    };

  }]);
