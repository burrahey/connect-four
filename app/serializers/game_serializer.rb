class GameSerializer < ActiveModel::Serializer
  attributes :id, :winner, :player1, :player2, :state, :created_at
end
