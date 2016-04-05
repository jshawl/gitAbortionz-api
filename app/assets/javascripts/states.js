//= require angular
//= require angular-resource
//= require angular-ui-router

"use strict";

(function(){
  angular
  .module("abortion", [
    "ui.router",
    "ngResource",
    "states",
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("State", [
    "$resource",
    stateFactoryFunction
  ])
  .controller("stateIndexController", [
    "State",
    stateIndexCtrlFunction
  ])
  .controller("stateShowController", [
    "State",
    "$stateParams",
    stateShowCtrlFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "states/state.index.html",
      controller: "stateIndexController",
      controllerAs: "stateIndexVM"
    })
    .state("show", {
      url: "states/:state_id",
      templateUrl: "states/state.show.html",
      controller: "stateShowController",
      controllerAs: "stateShowVM"
    });
  }

  function stateFactoryFunction($resource){
    var State = $resource("/states/:state_id.json", {},{
      update: {method: "PUT"}
    });
    State.all = State.query();
    return State;
  }

  function stateIndexCtrlFunction(State){
    var stateIndexVM = this;
    stateIndexVM.states = State.all;
  }

  function stateShowCtrlFunction(State, $stateParams){
    var stateShowVM = this;
    State.all.$promise.then(function(){
      State.all.forEach(function(state){
        if(state.id == $stateParams.id){
          stateShowVM.state = state;
        }
      });
    });
  }


})();
