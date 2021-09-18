defmodule Exgames.Number.Prime do
  alias Exgames.Number.Prime.Generator, as: G

  @doc ~S"""
  Generates a stream of prime numbers.
  """
  def stream(start \\ 2) do
    Stream.resource(
      fn ->
        wait_until(start)
        {[], true}
      end,
      fn {old_primes, first_run?} ->
        :timer.sleep(100)
        primes = G.get_primes()
        new_primes = primes -- old_primes

        if first_run? do
          {new_primes |> Enum.reject(&(&1 < start)), {primes, false}}
        else
          {new_primes, {primes, false}}
        end
      end,
      fn _ -> nil end
    )
  end

  def prime?(n) do
    primes = G.get_primes()

    if last_prime(primes) < n do
      wait_until(n)
      prime?(n)
    else
      primes |> Enum.any?(&(&1 == n))
    end
  end

  defp wait_until(n) do
    :timer.sleep(100)
    primes = G.get_primes()
    if last_prime(primes) < n, do: wait_until(n), else: nil
  end

  defp last_prime(primes) do
    last = primes |> List.last()
    if last, do: last, else: 2
  end
end
