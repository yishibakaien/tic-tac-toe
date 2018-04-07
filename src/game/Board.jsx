import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowLength: 3
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
      />
    );
  }

  renderBoard(arr) {
    const boardRow = [];
    const board = [];
    const MAX = this.state.rowLength;

    for (let i of arr) {
      boardRow.push(this.renderSquare(i));

      // 每行为三个 square
      if (boardRow.length === MAX) {
        const copy = boardRow.slice();
        boardRow.length = 0;
        board.push(<div className="board-row" key={i}>{copy}</div>);
      }
    }

    return (<div>{board}</div>);
  }
  render() {
    const squaresIndexArr = [...Array.from({length: 9}).keys()];
    return this.renderBoard(squaresIndexArr);
  }
}
