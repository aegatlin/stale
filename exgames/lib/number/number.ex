defmodule Exgames.Number do
  import Integer

  @doc ~S"""
  Generates the integer stream starting at 0

  ## Examples
      
      iex> Exgames.Number.numbers_stream() |> Enum.take(5)
      [0, 1, 2, 3, 4]

      iex> Exgames.Number.numbers_stream(100) |> Enum.take(5)
      [100, 101, 102, 103, 104]
  """
  def numbers_stream(start \\ 0), do: Stream.iterate(start, &(&1 + 1))

  @doc ~S"""
  Returns a boolean indicating whether m is a proper divisor of n.

  A proper divisor of m is any number other than 1 and m that divides m with no 
  remainder.

  ## Examples

      iex> Exgames.Number.proper_divisor?(4, 2)
      true

      iex> Exgames.Number.proper_divisor?(100, 11)
      false
  """
  def proper_divisor?(n, m), do: n != m && mod(n, m) == 0

  @doc ~S"""
  Returns the length of digits of a number

  ## Examples

      iex> Exgames.Number.digit_length(1234)
      4
  """
  def digit_length(n), do: length(digits(n))

  @doc ~S"""
  Returns all permutations of the list

  ## Examples

      iex> Exgames.Number.permutations([1, 2, 3])
      [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  """
  def permutations([]), do: [[]]

  def permutations(list) do
    for x <- list,
        sub_permutations <- permutations(list -- [x]) do
      [x | sub_permutations]
    end
  end
end
