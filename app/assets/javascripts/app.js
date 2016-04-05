//=require angularjs
//=require angular-resource
<<<<<<< HEAD


=======
>>>>>>> c6d36e172db4699b4958a2a7ec3c2969d2050e36
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
<<<<<<< HEAD
    $stateProvider
    .state("StateIndex", {
      url: "/states",
      templateUrl: "/assets/states/index.html",
      controller: "stateIndexController",
      controllerAs: "StateIndexViewModel"
    });
=======
$stateProvider
.state("StateIndex", {
  url: "/states",
  templateUrl: "ng-views/states/index.html",
  controller: "stateIndexController",
  controllerAs: "StateIndexViewModel"
});
>>>>>>> badee66a65f2e6ff0857588f70a955a812119126
  }

})();
