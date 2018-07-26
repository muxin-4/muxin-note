var data = [1, 4, 7, 2, 9, 13, 5, 8, 2, 9]
	bar_height = 50,
	bar_padding = 10,
	svg_height = (bar_height + bar_padding) * data.length,
	svg_width = 500;

var scale = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0, svg_width]);


var svg = d3.select("#container")
	.append("svg")
	.attr("width", svg_width)
	.attr("height", svg_height)

var bar = svg.selectAll("g")
	.data(data)
	.enter()
	.append("g")
	.attr("transform", function (d, i) {
		return "translate(0," + i * (bar_height + bar_padding) + ")";
	});

bar.append("rect")
	.attr({
		"width":function(d){return scale(d);},
		"height":bar_height
	})
	.style("fill","steelblue")

bar.append("text")
	.text(function(d){return d;})
	.attr({
		"x": function (d) {
			return scale(d);
		},
		"y": bar_height / 2,
		"text-anchor": "end"
	})


