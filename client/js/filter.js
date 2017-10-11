angular.module("minhaPizza")
  .filter("reaisFilter", function(){
    return function(input){
      if(!isNaN(input)){
        return ("R$ " + input.toFixed(2).replace(".", ","));
      }
      return "Valor incorreto";
    };
  });
