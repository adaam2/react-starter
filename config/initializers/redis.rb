REDIS = begin
  uri = URI.parse(ENV.fetch("REDISCLOUD_URL", "redis://localhost:6379"))
  pool_size = ENV.fetch("DB_POOL", 5).to_i

  ConnectionPool::Wrapper.new(size: pool_size, timeout: 5) do
    Redis.new(host: uri.host, port: uri.port, password: uri.password)
  end
end
