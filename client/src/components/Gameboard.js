import React, { Component } from 'react';
import Cell from './Cell';

export class Gameboard extends Component {
  render(){
    const renderedGame = this.props.gameState.map(row => {return (
      <tr>
        {row.map(cell => { return (
          <td>
            {cell}
          </td>
        )})}
      </tr>
    )});
    return(
      <table>
        {renderedGame}
      </table>
    )
  }
}
