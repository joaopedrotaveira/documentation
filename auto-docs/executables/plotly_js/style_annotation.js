
var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 1, 3, 2, 4, 3, 4, 6, 5], 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 4, 5, 1, 2, 2, 3, 4, 2], 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  showlegend: false, 
  annotations: [
    {
      x: 2, 
      y: 5, 
      xref: "x", 
      yref: "y", 
      text: "max=5", 
      showarrow: true, 
      font: {
        family: "Courier New, monospace", 
        size: 16, 
        color: "#ffffff"
      }, 
      align: "center", 
      arrowhead: 2, 
      arrowsize: 1, 
      arrowwidth: 2, 
      arrowcolor: "#636363", 
      ax: 20, 
      ay: -30, 
      bordercolor: "#c7c7c7", 
      borderwidth: 2, 
      borderpad: 4, 
      bgcolor: "#ff7f0e", 
      opacity: 0.8
    }
  ]
};
Plotly.plot(divid, data, layout);
