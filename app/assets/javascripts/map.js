uStates.draw = function(id, data, toolTip){
// what's the difference between this function and the one in US.js?
// please remove duplicate code
		function mouseOver(d){
			d3.select("#tooltip").transition().duration(200).style("opacity", 0.9);

			d3.select("#tooltip").html(toolTip(d.n, data[d.id]))
				.style("left", (d3.event.pageX) + "px")
				.style("top", (d3.event.pageY - 28) + "px");
		}

		function mouseOut(){
			d3.select("#tooltip").transition().duration(500).style("opacity", 0);
		}

		d3.select(id).selectAll(".state")
			.data(uStatePaths).enter().append("path").attr("class","state").attr("d",function(d){ return d.d; })
			.style("fill",function(d){ return data[d.id].color; })
			.attr("data-state", function(d){

				 return d.n
			})
			.on("click", function(){
        console.log($(this).attr("data-state"))
      })
			.on("mouseover", mouseOver).on("mouseout", mouseOut);

	}


	function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
		return "<h4>"+n+"</h4><table>"+
			"<tr><td>Grade</td><td>"+ "Stuff" +"</td></tr>"+
			"<tr><td>Average</td><td>"+ "Stuff" +"</td></tr>"+
			"<tr><td>High</td><td>"+"Stuff"+"</td></tr>"+
			"</table>";
	}

	var sampleData ={};	/* Sample random data. */
	["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
	"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
	"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
	"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
	"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
		.forEach(function(d){
			var low=Math.round(100*Math.random()),
				mid=Math.round(100*Math.random()),
				high=Math.round(100*Math.random());
			sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]),
					avg:Math.round((low+mid+high)/3), color:"#81AC8B"};
		});

	/* draw states on id #statesvg */
	uStates.draw("#statesvg", sampleData, tooltipHtml);
