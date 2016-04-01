"use strict";
(function(){
  angular
  .module("states")
  .controller("stateIndexController", [
    "$resource",
    StateIndexControllerFunction
  ]);

  function StateIndexControllerFunction($resource){
    this.data = State.query();
  }
})();
