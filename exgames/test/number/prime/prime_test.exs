defmodule Exgames.Number.PrimeTest do
  use ExUnit.Case

  alias Exgames.Number.Prime

  doctest Prime

  describe "primes_stream/0" do
    test "generates a stream of prime numbers" do
      primes = Prime.stream() |> Stream.take(5) |> Enum.to_list()
      assert primes == [2, 3, 5, 7, 11]
    end

    test "generate a stream of prime numbers with a starting number" do
      primes = Prime.stream(907) |> Stream.take(5) |> Enum.to_list()
      assert primes == [907, 911, 919, 929, 937]
    end
  end

  describe "prime?/1" do
    test "returns the correct boolean for a variety of small numbers" do
      assert Prime.prime?(-5) == false
      assert Prime.prime?(0) == false
      assert Prime.prime?(1) == false
      assert Prime.prime?(2) == true
      assert Prime.prime?(3) == true
      assert Prime.prime?(4) == false
      assert Prime.prime?(10) == false
      assert Prime.prime?(11) == true
      assert Prime.prime?(100) == false
      assert Prime.prime?(101) == true
    end
  end
end
