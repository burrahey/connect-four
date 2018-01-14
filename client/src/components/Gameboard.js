import React from 'react';
import Cell from './Cell';

const Gameboard = (props) => {
  const renderedGame = props.gameState.map(row => {return (
    <tr>
      {row.map(cell => { return (
        <td>
          {cell}
        </td>
      )})}
    </tr>
  )})
  return (
    <table>
      {renderedGame}
    </table>
  )
}

export default Gameboard;
