defmodule Exgames.SetTest do
  use ExUnit.Case

  alias Exgames.Set, as: S
  doctest S

  describe "subsets/1" do
    test "for the empty set, returns a set containing the empty set" do
      empty_set = MapSet.new()
      subsets = S.subsets(empty_set)
      assert MapSet.size(subsets) == 1
      assert subsets |> MapSet.member?(MapSet.new())
    end

    test "for a set of 1 element, returns a set containing the empty set and itself" do
      set = MapSet.new([1])
      subsets = S.subsets(set)
      assert MapSet.size(subsets) == 2
      assert subsets |> MapSet.member?(MapSet.new())
      assert subsets |> MapSet.member?(MapSet.new([1]))
    end

    test "for multiple elements, return set containing subsets" do
      set = MapSet.new([1, 2])
      subsets = S.subsets(set)
      assert MapSet.size(subsets) == 4
      assert subsets |> MapSet.member?(MapSet.new())
      assert subsets |> MapSet.member?(MapSet.new([1]))
      assert subsets |> MapSet.member?(MapSet.new([2]))
      assert subsets |> MapSet.member?(MapSet.new([1, 2]))
    end
  end

  describe "proper_subsets/1" do
    test "for the empty set, returns the empty set" do
      empty_set = MapSet.new()
      subsets = S.proper_subsets(empty_set)
      assert MapSet.size(subsets) == 0
    end

    test "for a set of 1 element, returns a set containing the empty set" do
      set = MapSet.new([1])
      subsets = S.proper_subsets(set)
      assert MapSet.size(subsets) == 1
      assert subsets |> MapSet.member?(MapSet.new())
    end

    test "for multiple elements, return set containing subsets" do
      set = MapSet.new([1, 2])
      subsets = S.proper_subsets(set)
      assert MapSet.size(subsets) == 3
      assert subsets |> MapSet.member?(MapSet.new())
      assert subsets |> MapSet.member?(MapSet.new([1]))
      assert subsets |> MapSet.member?(MapSet.new([2]))
    end
  end

  describe "to_subset_list/1" do
    test "ignores the empty set" do
      assert MapSet.new() |> S.subsets() |> S.to_subset_list() == []
      assert MapSet.new([MapSet.new([])]) |> S.to_subset_list() == []
      assert MapSet.new() |> S.to_subset_list() == []
    end

    test "converts the set of subsets into a list of lists" do
      assert MapSet.new([1]) |> S.subsets() |> S.to_subset_list() == [[1]]

      assert MapSet.new([1, 2])
             |> S.subsets()
             |> S.to_subset_list() == [[1], [2], [1, 2]]
    end
  end
end
