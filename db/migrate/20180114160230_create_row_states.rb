class CreateRowStates < ActiveRecord::Migration[5.1]
  def change
    create_table :row_states do |t|
      t.integer :game_id
      t.integer :row_id
      t.string :state

      t.timestamps
    end
  end
end
