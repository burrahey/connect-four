class GamesController < ApplicationController
  def index
    render( status: 200, json: Game.all )
  end

  def show
    @game = Game.find_by(id: params[:id])
    render( status: 200, json: @game )
  end

  def create
    @game = Game.new(winner: params[:winner], player1: params[:player1], player2: params[:player2], state: params[:state])

    if @game.save
      render( status: 200 )
    else
      render( status: 400 )
    end
  end
end
