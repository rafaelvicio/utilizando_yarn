angular.module("minhaPizza")
  .config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/:nome", {
        templateUrl: 'views/novoSabor.html',
        controller: 'novoSaborCtrl'
      })
      .when("/", {
        templateUrl: 'views/novoSabor.html',
        controller: 'novoSaborCtrl'
      })
      .when('/teste', {
        templateUrl: 'views/teste.html'
      });
  }]);
