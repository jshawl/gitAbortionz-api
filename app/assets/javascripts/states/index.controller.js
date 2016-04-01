"use strict";
(function(){
  angular
  .module("states")
  .controller("stateIndexController", [
    "StateFactory",
    StateIndexControllerFunction
  ]);

  function StateIndexControllerFunction(StateFactory){
    // this.states = StateFactory.query();
  }
})();
