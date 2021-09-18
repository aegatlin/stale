defmodule Exgames do
  require Logger
  alias Exgames.Number.Prime
  alias Exgames.Number.Obscura, as: Ob
  alias Exgames.Set, as: S

  def run do
    Prime.stream(110000)
    |> Stream.each(&get_prime_family(&1))
    |> Stream.run()
  end

  def get_prime_family(n) do
    digits = Integer.digits(n)
    IO.write("#{n}, ")

    MapSet.new(0..(length(digits) - 1))
    |> S.proper_subsets()
    |> IO.inspect()
    |> S.to_subset_list()
    |> IO.inspect()
    |> Enum.map(&Ob.digit_family(n, &1))
    |> IO.inspect()
    |> Enum.each(fn digit_family ->
      IO.inspect(digit_family)
      prime_digit_family = digit_family |> Enum.filter(&Prime.prime?(&1))

      if length(prime_digit_family) >= 7 do
        IO.puts("FOUND #{n}")
        IO.inspect(prime_digit_family)
      end
    end)
  end
end
