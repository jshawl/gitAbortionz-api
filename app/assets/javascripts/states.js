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
    "posts"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("State", [
    "$resource",
    stateFactoryFunction
  ])
  .factory("Post", [
    "$resource",
    postFactoryFunction
  ])
  .controller("stateIndexController", [
    "State",
    stateIndexCtrlFunction
  ])
  .controller("stateShowController", [
    "State",
    "$stateParams",
    stateShowCtrlFunction
  ])
  .directive("postForm", [
    "Post",
    postFormFunction
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
      url: "/:state_id",
      templateUrl: "states/state.show.html",
      controller: "stateShowController",
      controllerAs: "stateShowVM"
    });
  }

  function stateFactoryFunction($resource){
    var State = $resource("/states/:state_id", {},{
      update: {method: "PUT"}
    });
    State.all = State.query();
    return State;
  }

  function stateIndexCtrlFunction(){
    var stateIndexVM = this;
    stateIndexVM.states = State.all;
  }

  function stateShowCtrlFunction(){
    var showVM = this;
    State.all.$promise.then(function(){
      State.all.forEach(function(state){
        if(state.id == $stateParams.id){
          showVM.state = state;
        }
      });
    });
  }

  function postFormFunction(Post){
    return{
      templateUrl: "",
      scope: {
        destination:  "=",
        formMethod:   "@"
      },
      link: function(scope){
        scope.create = function(){
          Post.save(scope.destination, function(response){
            Post.all.push(response);
          });
        };
        scope.update = function(){
          Post.update({id: scope.destination.id}, scope.destination, function(response){
            console.log("Successful");
          });
        }
      }
    }
  }

})();
