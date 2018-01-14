import React from 'react';

const Cell = (props) => {
  return (
    <td id={props.row.toString() + props.column.toString()}>
      {props.value}
    </td>
  )
}

export default Cell;
