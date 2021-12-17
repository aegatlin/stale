defmodule Friends.Repo.Migrations.ForPeopleAddProfile do
  use Ecto.Migration

  def change do
    alter table :people do
      add :profile, :map
    end
  end
end
