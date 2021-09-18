defmodule Exgames.Number.Obscura do
  @moduledoc """
  This is where obscure functions that are probably bespoke to a specific task 
  will live. On the off-chance they are useful in the future, I will leave them
  here. These function will most likely be listed chronologically. 
  """

  alias Exgames.Number, as: N
  alias Exgames.Set, as: S

  @doc ~S"""
  Return a list of numbers where each digit at an index in the index_list is  
  replaced with a single digit 0..9, including the original digit. The digit 
  length has to remain identical.

  ## Examples
        
      iex> Exgames.Number.Obscura.digit_family(137, [0, 2])
      [131, 232, 333, 434, 535, 636, 737, 838, 939]

  """
  def digit_family(n, index_list) do
    for j <- 0..9 do
      index_list
      |> Enum.reduce(Integer.digits(n), fn i, d ->
        d |> List.replace_at(i, j)
      end)
      |> Integer.undigits()
    end
    |> Enum.reject(&(length(Integer.digits(n)) != length(Integer.digits(&1))))
  end
end
