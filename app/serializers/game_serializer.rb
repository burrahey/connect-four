class GameSerializer < ActiveModel::Serializer
  attributes :id, :winner, :created_at
  has_many :row_states
end
