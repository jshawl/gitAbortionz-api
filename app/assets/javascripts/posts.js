//=require angularjs
//=require angular-resource

"use strict";
(function(){
  angular
  .module("posts", [
    "ngResource"
    ])
    .controller("posts_controller", PostController);

    PostController.$inject= ["$resource"];

    function PostController($resource){
    var vm = this;
    // check post_id
    var Post = $resource("/posts/:post_id", {},{
      update: {method: "PUT"}
    });
    }


    })();
