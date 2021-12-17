defmodule Friends.Repo.Migrations.CreateArtists do
  use Ecto.Migration

  def change do
    create table :artists do
      add :name, :string
    end
  end
end
