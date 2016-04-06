<<<<<<< HEAD
=======

>>>>>>> d833c89676034e9bfc460b499535241a8d16cf3c
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
