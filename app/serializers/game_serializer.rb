class GameSerializer < ActiveModel::Serializer
  attributes :id, :winner, :created_at
end
