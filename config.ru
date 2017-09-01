# This file is used by Rack-based servers to start the application.
require_relative 'webpack_proxy'
require_relative 'config/environment'

# The Sinatra app is namespaced to /api, whereas the react app sits at the root /
run Rack::URLMap.new(
  '/api' => Rails.application,
  '/' => WebpackProxy.new
)
