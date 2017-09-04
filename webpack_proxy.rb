require "rack-proxy"

# Proxies the React app from port 8080 through to this application

class WebpackProxy < Rack::Proxy
  def rewrite_env(env)
    env["HTTP_HOST"] = "localhost:8080"
    env
  end
end
