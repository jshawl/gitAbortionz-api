"use strict";
(function(){
  angular
  .module("posts")
  .controller("postIndexController", [
    "$resource",
    PostIndexControllerFunction
  ]);

  function PostIndexControllerFunction($resource){
    this.data = Post.query();
    this.setCurrent = function(post){
      this.current = post    
    }
  }
})();
