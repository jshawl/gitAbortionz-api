"use strict";
(function(){
  angular
  .module("states")
  .controller("stateIndexController", [
    // "StateFactory",
    StateIndexControllerFunction
  ]);

  function StateIndexControllerFunction(){
    // this.states = StateFactory.query();
  }
})();
