class RowState < ApplicationRecord
  belongs_to :game
  serialize :state, Array
end
