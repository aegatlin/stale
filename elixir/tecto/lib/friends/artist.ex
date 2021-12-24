defmodule Friends.Artist do
  use Ecto.Schema

  schema "artists" do
    field :name, :string
  end

end

defmodule Friends.Album do
  use Ecto.Schema
  alias Friends.{Artist}

  schema "albums" do
    field :name, :string
    belongs_to :artist, Artist
  end
end
