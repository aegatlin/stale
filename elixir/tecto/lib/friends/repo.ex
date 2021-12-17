defmodule Friends.Repo do
  use Ecto.Repo,
    otp_app: :tecto,
    adapter: Ecto.Adapters.Postgres
end
