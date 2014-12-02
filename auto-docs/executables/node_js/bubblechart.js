// Learn about API authentication here: plot.ly/nodejs/getting-started
// Find your api_key here: plot.ly/settings/api

var plotly = require('plotly')('TestBot', 'r1neazxo9w')


var trace1 = {
  x: [1, 2, 3, 4], 
  y: [10, 11, 12, 13], 
  mode: "markers", 
  marker: {
    color: ["hsl(0,100,40)", "hsl(33,100,40)", "hsl(66,100,40)", "hsl(99,100,40)"], 
    size: [12, 22, 32, 42], 
    opacity: [0.6, 0.7, 0.8, 0.9]
  }, 
  type: "scatter"
};
var trace2 = {
  x: [1, 2, 3, 4], 
  y: [11, 12, 13, 14], 
  mode: "markers", 
  marker: {
    color: "rgb(31, 119, 180)", 
    size: 18, 
    symbol: ["circle", "square", "diamond", "cross"]
  }, 
  type: "scatter"
};
var trace3 = {
  x: [1, 2, 3, 4], 
  y: [12, 13, 14, 15], 
  mode: "markers", 
  marker: {
    size: 18, 
    line: {
      color: ["rgb(120,120,120)", "rgb(120,120,120)", "red", "rgb(120,120,120)"], 
      width: [2, 2, 6, 2]
    }
  }, 
  type: "scatter"
};
var data = [trace1, trace2, trace3];
var layout = {showlegend: false};
var graphOptions = {layout: layout, filename: "bubblechart", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});
