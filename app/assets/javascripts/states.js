"use strict";

(function(){
  angular
  .module("abortion", [
    "ui.router",
    "ngResource",
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("State", [
    "$resource",
    stateFactoryFunction
  ])
  .controller("stateIndexController", [
    "State",
    "$state",
    stateIndexCtrlFunction
  ])
  .controller("stateShowController", [
    "State",
    "$stateParams",
    "$state",
    stateShowCtrlFunction
  ])
  .factory("Post", [
    "$resource",
    postFactoryFunction
  ])
  .controller("postIndexController", [
    "Post",
    "$state",
    postIndexCtrlFunction
  ]);

  function postIndexCtrlFunction(Post, $state){
    var postIndexVM = this;
    postIndexVM.posts = Post.query();
  }

  function postFactoryFunction($resource){
    var Post = $resource("/posts/:id", {},{
      update: {method: "PUT"}
    });
    return Post;
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "/states/state.index.html",
      controller: "stateIndexController",
      controllerAs: "stateIndexVM"
    })
    .state("show", {
      url: "/states/:state_id",
      templateUrl: "/states/state.show.html",
      controller: "stateShowController",
      controllerAs: "stateShowVM"
    })
    .state("postIndex", {
      url: "/posts",
      templateUrl: "/posts/post.index.html",
      controller: "postIndexController",
      controllerAs: "postShowVM"
    });
  }

  function stateFactoryFunction($resource){
    var State = $resource("/states/:state_id.json", {},{
      update: {method: "PUT"}
    });
    State.all = State.query();
    return State;
  }

  function stateIndexCtrlFunction(State, $state){
    var stateIndexVM = this;
    stateIndexVM.states = State.all;
    console.log("Here");
    uStates.draw = function(id, data, toolTip){
      function mouseOver(d){
        d3.select("#tooltip").transition().duration(200).style("opacity", 0.9);
        console.log("data",data)
        d3.select("#tooltip").html(toolTip(d.n, d.id))
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
      }

      function mouseOut(){
        d3.select("#tooltip").transition().duration(500).style("opacity", 0);
      }

      d3.select(id).selectAll(".state")
      .data(uStatePaths).enter().append("path").attr("class","state").attr("d",function(d){ return d.d; })
      .style("fill",function(d){
        try{
           return "rgb("+states[d.id].score+",0,200)"
        }catch(e){
          return "rgb(0,0,0)"
        }

        })
      .attr("data-state", function(d){

        return d.id
      })

      .on("click", function(){
        $state.go("show",{state_id:$(this).attr("data-state")})
        console.log($(this).attr("data-state"))
      })
      .on("mouseover", mouseOver).on("mouseout", mouseOut);

    }


    function tooltipHtml(n,id){	/* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
      "<tr><td>Grade</td><td>"+ states[id].grade+"</td></tr>" +
      "<tr><td>Score</td><td>"+ states[id].score+"</td></tr>"+
      "</table>";
    }
 }

      function stateShowCtrlFunction(State, $stateParams, $state){
        var stateShowVM = this;
        console.log("here!");
        stateShowVM.state = State.get({state_id: $stateParams.state_id})
        uStates.draw = function(id, data, toolTip){
          function mouseOver(d){
            d3.select("#tooltip").transition().duration(200).style("opacity", 0.9);
            console.log("data",data)
            d3.select("#tooltip").html(toolTip(d.n, d.id))
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
          }

          function mouseOut(){
            d3.select("#tooltip").transition().duration(500).style("opacity", 0);
          }

          d3.select(id).selectAll(".state")
          .data(uStatePaths).enter().append("path").attr("class","state").attr("d",function(d){ return d.d; })
          .style("fill",function(d){
            try{
               return "rgb("+states[d.id].score+",0,200)"
            }catch(e){
              return "rgb(0,0,0)"
            }

            })
          .attr("data-state", function(d){

            return d.id
          })

          .on("click", function(){
            $state.go("show",{state_id:$(this).attr("data-state")})
            console.log($(this).attr("data-state"))
          })
          .on("mouseover", mouseOver).on("mouseout", mouseOut);

        }


        function tooltipHtml(n,id){	/* function to create html content string in tooltip div. */
          return "<h4>"+n+"</h4><table>"+
          "<tr><td>Grade</td><td>"+ states[id].grade+"</td></tr>" +
          "<tr><td>Score</td><td>"+ states[id].score+"</td></tr>"+
          "</table>";
        }

        var sampleData ={};	/* Sample random data. */
        ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
        "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
        "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
        "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
        "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
        .forEach(function(d){
          var low=Math.round(100*Math.random())
          var mid=Math.round(100*Math.random())
          var high=Math.round(100*Math.random());
          sampleData[d] = {
            low:d3.min([low,mid,high]),
            high:d3.max([low,mid,high]),
            avg:Math.round((low+mid+high)/3),
            color:"#81AC8B"
          };
        });

          /* draw states on id #statesvg */
          uStates.draw("#statesvg", sampleData, tooltipHtml);
      }


})();
