import React from 'react';
import Board from './Board';
import './index.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array.from({ length: 9 }).fill(null)
        }
      ],
      sortOrder: true,
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    // slice 为开区间 [1, 2, 3, 4].slice(0, 2)  => [1, 2]
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // 如果有一方获胜，或者此格已被填充，忽略点击事件
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  toggleSort() {
    this.setState({
      sortOrder: !this.state.sortOrder
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,

      // 偶数次为 true
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let toggleButton;

    if (this.state.stepNumber) {
      toggleButton = (
        <button
          onClick={() => this.toggleSort()}
          style={{ margin: '20px 0 0 30px' }}
        >
          sort by {this.state.sortOrder ? 'asc' : 'desc'}
        </button>
      );
    }

    let status;

    if (winner) {
      status = 'winner is: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          {toggleButton}
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

/**
 * 当前步数下的游戏情况，判断输赢
 * @param  {[object]} squares [description]
 * @return {[winner|null]}         [description]
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
