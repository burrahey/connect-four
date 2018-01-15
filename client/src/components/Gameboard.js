import React, { Component } from 'react';
import Cell from './Cell';

export class Gameboard extends Component {
  debugger;
  render(){
    const renderedGame = this.props.gameState.map((row,index) => {return (
      <tr key={index}>
        {row.map((cell, cellIndex) => { return (
          <Cell value={cell} row={index} column={cellIndex} key={cellIndex} handleOnClick={this.props.handleOnClick}/>
        )})}
      </tr>
    )});
    return(
      <table>
        <tbody>
        {renderedGame}
        </tbody>
      </table>
    )
  }
}
