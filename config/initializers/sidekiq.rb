require "sidekiq"
require "sidekiq/web"
require "sidekiq/scheduler"
require "sidekiq-scheduler/web"

client = REDIS.client
Sidekiq.redis = { host: client.host, port: client.port, password: client.password }

Sidekiq.configure_server do |config|
  unless Rails.env.test? || Rails.env.development?
    config.on(:startup) do
      Sidekiq.schedule = YAML
        .load_file(File.expand_path(Rails.root.join("config", "scheduled_jobs.yml")))
      Sidekiq::Scheduler.reload_schedule!
    end
  end
end
