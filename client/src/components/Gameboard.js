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
    <table border="1">
      {renderedGame}
    </table>
  )
}

export default Gameboard;
