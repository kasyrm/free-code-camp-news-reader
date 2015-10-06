(function(){
  var app = angular.module("newsApp",[]);
 
  app.controller("gridController", ["$http", function($http){
    var elements = []
    var grid = this;
    $http.get("http://www.freecodecamp.com/news/hot").success(function(data){
     
      grid.elements = data;
    })
    
  }]);
  
  
  
})();
