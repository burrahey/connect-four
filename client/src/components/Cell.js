import React from 'react';

const Cell = (props) => {
  return (
    <td onClick={(e) => {props.handleOnClick(e)}} id={props.column.toString()}>
      {props.value}
    </td>
  )
}

export default Cell;
