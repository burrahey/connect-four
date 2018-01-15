class AddPlayersToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :player1, :string
    add_column :games, :player2, :string
  end
end
