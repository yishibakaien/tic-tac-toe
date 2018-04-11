import React from 'react';

// 棋盘的正方形小个子
export default function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      style={props.value ? { background: 'rgba(7, 17, 27, .05)' } : {}}
    >
      {props.value}
    </button>
  );
}
