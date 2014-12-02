% Learn about API authentication here: plot.ly/matlab/getting-started
% Find your api_key here: plot.ly/settings/api

signin('TestBot', 'r1neazxo9w')

x = randn(500,1);
y = randn(500,1)+1;

data = {...
  struct(...
    'x', x, ...
    'y', y, ...
    'histnorm', 'probability', ...
    'autobinx', false, ...
    'xbins', struct(...
      'start', -3, ...
      'end', 3, ...
      'size', 0.1), ...
    'autobiny', false, ...
    'ybins', struct(...
      'start', -2.5, ...
      'end', 4, ...
      'size', 0.1), ...
    'colorscale', { { {0, 'rgb(12,51,131)'},{0.25, 'rgb(10,136,186)'},{0.5, 'rgb(242,211,56)'},{0.75, 'rgb(242,143,56)'},{1, 'rgb(217,30,30)'} } }, ...
    'type', 'histogram2d')...
};
response = plotly(data, struct('filename', '2d-histogram-options', 'fileopt', 'overwrite'));
plot_url = response.url
