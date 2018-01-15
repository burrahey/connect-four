class GamesController < ApplicationController
  def index
    render(
      status: 200,
      json: Game.all
    )
  end

  def create
    binding.pry
  end
end
