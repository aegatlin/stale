defmodule Friends.Person do
  use Ecto.Schema

  schema "people" do
    field :first_name, :string
    field :last_name, :string
    field :age, :integer

    embeds_one :profile, Profile do
      field :online, :string
      field :dark_mode, :string
      field :visibility, Ecto.Enum, values: [:public, :private]
    end
  end
end
