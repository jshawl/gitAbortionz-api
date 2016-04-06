"use strict";
(function(){
  angular
  .module("posts", [
    "ui.router",
    "ngResource"
  ])
  .factory("Post", [
    postFactoryFunction
  ])
  .controller("postIndexController", [
    "Post",
    "$state",
    postIndexCtrlFunction
  ]);

  function postFactoryFunction($resource){
    var Post = $resource("/posts/:post_author", {},{
      update: {method: "PUT"}
    });
    Post.all = Post.query();
      return Post;
  }


  function PostController($resource){
    var vm = this;
    // check post_id
    var Post = $resource("/posts/:post_id", {},{
      update: {method: "PUT"}
    });
  }

  function postIndexCtrlFunction (State, $state){
    var postIndexVM = this;
    postIndexVM.posts = Post.all;
  }

})();
