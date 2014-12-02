% Learn about API authentication here: plot.ly/matlab/getting-started
% Find your api_key here: plot.ly/settings/api

signin('TestBot', 'r1neazxo9w')


trace1 = struct(...
  'x', [0, 1, 2, 3, 4, 5, 6, 7, 8], ...
  'y', [0, 3, 6, 4, 5, 2, 3, 5, 4], ...
  'type', 'scatter');
trace2 = struct(...
  'x', [0, 1, 2, 3, 4, 5, 6, 7, 8], ...
  'y', [0, 4, 7, 8, 3, 6, 3, 3, 4], ...
  'type', 'scatter');
data = {trace1, trace2};
layout = struct(...
    'showlegend', true, ...
    'legend', struct(...
      'x', 100, ...
      'y', 1));
response = plotly(data, struct('layout', layout, 'filename', 'legend-outside', 'fileopt', 'overwrite'));
plot_url = response.url
