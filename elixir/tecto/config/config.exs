import Config

config :tecto, Friends.Repo,
  database: "tecto_repo",
  hostname: "localhost"

config :tecto, ecto_repos: [Friends.Repo]
