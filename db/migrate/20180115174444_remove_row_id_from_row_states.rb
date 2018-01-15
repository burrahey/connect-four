class RemoveRowIdFromRowStates < ActiveRecord::Migration[5.1]
  def change
    remove_column :row_states, :row_id
  end
end
