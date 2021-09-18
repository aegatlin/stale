defmodule Exgames.Number.Prime.GeneratorTest do
  use ExUnit.Case

  alias Exgames.Number.Prime.Generator

  describe "step/2" do
    test "works in the base case" do
      assert Generator.step({2, []}) == {3, [2]}
    end

    test "works sequentially" do
      final_state = for _ <- 2..10, reduce: {2, []} do
        state -> Generator.step(state)
      end

      assert final_state == {11, [2, 3, 5, 7]}
    end
  end
end
