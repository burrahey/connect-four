import React from 'react';

const Cell = (props) => {
  const position = "circle-" + props.value;
  return (
    <td>
      <div onClick={(e) => {props.handleOnClick(e)}} id={props.column.toString()} className={position}>
      </div>
    </td>
  )
}

export default Cell;
