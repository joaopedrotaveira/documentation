
var trace1 = {
  x: [0, 1, 2], 
  y: [1, 2, 3], 
  name: "First Trace", 
  showlegend: false, 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3], 
  y: [8, 4, 2, 0], 
  name: "Second Trace", 
  showlegend: true, 
  type: "scatter"
};
var data = [trace1, trace2];
Plotly.plot(divid, data);
