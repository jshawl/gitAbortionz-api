//=require angularjs
//=require angular-resource

"use strict";
(function(){
  angular
  .module("abortion", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("StateIndex", {
      url: "/states",
      templateUrl: "/assets/states/index.html",
      controller: "stateIndexController",
      controllerAs: "StateIndexViewModel"
    });

    $stateProvider
    .state("StateIndex", {
      url: "/states",
      templateUrl: "/",
      controller: "stateIndexController",
      controllerAs: "StateIndexViewModel"
    });

  }

})();
