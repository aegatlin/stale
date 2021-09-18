defmodule Exgames.Application do
  use Application

  def start(_type, _args) do
    children = [Exgames.Number.Prime.Generator]
    Supervisor.start_link(children, strategy: :one_for_one)
  end
end
