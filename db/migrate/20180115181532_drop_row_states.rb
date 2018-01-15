class DropRowStates < ActiveRecord::Migration[5.1]
  def change
    drop_table :row_states
  end
end
