var x = [];
var y = [];

for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
	y[i] = Math.random() + 1;
}


var data = [
  {
    x: x, 
    y: y, 
    type: "histogram2d"
  }
];
Plotly.plot(divid, data);
