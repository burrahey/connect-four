class GamesController < ApplicationController
  def index
    render( status: 200, json: Game.all )
  end

  def create
    @game = Game.create(winner: params[:winner], player1: params[:player1], player2: params[:player2])
    @rowState = RowState.create(state: params[:state], game_id: @game.id)

    if @game.save
      render( status: 200 )
    else
      render( status: 400 )
    end
  end
end
