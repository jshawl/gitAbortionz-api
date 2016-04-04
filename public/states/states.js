//= require angular
//= require angular-resource

"use strict";
(function(){
  angular
  .module("states", [
    "ngResource"
  ])
  .controller("states_controller", StateController);

  StateController.$inject= ["$resource"];

  function StateController($resource){
    var vm = this;
    var State = $resource("/states/:state_id", {},{
      update: {method: "PUT"}
    });
  }


})();
