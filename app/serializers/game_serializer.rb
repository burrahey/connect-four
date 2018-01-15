class GameSerializer < ActiveModel::Serializer
  attributes :id, :winner, :player1, :player2, :created_at
  has_many :row_states
end
