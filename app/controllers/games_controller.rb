class GamesController < ApplicationController
  def index
    render( status: 200, json: Game.all )
  end

  def create
    @game = Game.new(winner: params[:winner])
    if @game.save
      render( status: 200 )
    else
      render( status: 500 )
    end
  end
end
