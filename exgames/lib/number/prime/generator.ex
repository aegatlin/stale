defmodule Exgames.Number.Prime.Generator do
  use GenServer

  alias Exgames.Number, as: N

  # Client

  def start_link(_) do
    GenServer.start_link(__MODULE__, [], name: __MODULE__)
  end

  def get_primes() do
    GenServer.call(__MODULE__, :primes)
  end

  # Server

  @impl true
  def init(_) do
    {:ok, {2, []}, 0}
  end

  @impl true
  def handle_call(:primes, _from, {_n, primes} = state) do
    {:reply, primes, state, 0}
  end

  @impl true
  def handle_info(:timeout, state) do
    {:noreply, step(state), 0}
  end

  def step({n, primes} = _state) do
    prime? = !Enum.any?(primes, &N.proper_divisor?(n, &1))
    {n + 1, if(prime?, do: primes ++ [n], else: primes)}
  end
end
