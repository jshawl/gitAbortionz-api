"use strict";
(function(){
  angular
  .module("abortion", [
    "ui.router",
    "ngResource"
  ])
  ;


  function PostController($resource){
    var vm = this;
    // check post_id
    var Post = $resource("/posts/:post_id", {},{
      update: {method: "PUT"}
    });
  }



})();
