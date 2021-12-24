defmodule Friends.Repo.Migrations.AddAlbums do
  use Ecto.Migration

  def change do
    create table :albums do
      add :name, :string
      add :artist_id, references(:artists)
    end
  end
end
