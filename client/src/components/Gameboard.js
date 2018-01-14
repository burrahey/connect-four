import React, { Component } from 'react';
import Cell from './Cell';

export class Gameboard extends Component {
  render(){
    const renderedGame = this.props.gameState.map((row,index) => {return (
      <tr key={index}>
        {row.map((cell, cellIndex) => { return (
          <Cell value={cell} row={index} column={cellIndex} key={cellIndex}/>
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
