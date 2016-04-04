//=require angularjs
//=require angular-resource


"use strict";
(function(){
  angular
  .module("abortion", [
  "ui.router",
  "states",
  "posts"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
$stateProvider
.state("StateIndex", {
  url: "/states",
  templateUrl: "/assets/states/index.html",
  controller: "stateIndexController",
  controllerAs: "StateIndexViewModel"
});
  }

})();
