import React, {Component} from 'react';
import './App.css';
import Button from './Button';
import GameStatus from './GameStatus';
import GameRules from './GameRules';
import PlayerIcon from './PlayerIcon';

class App extends Component {
  constructor() {
    super();

    this.state = App.getEmptyBoard();
  }

  static getEmptyBoard() {
    return {
      field: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      playerMove: 1
    };
  }

  static invertPlayerMove(playerMove) {
    return playerMove === 1 ? -1 : 1;
  }

  handleButtonClick = (row, column) => {
    let {field, playerMove} = this.state;

    if (!GameRules.isDraw(field) && field[row][column] === 0) {
      field[row][column] = playerMove;

      this.setState({
        field: field,
        playerMove: App.invertPlayerMove(playerMove)
      });
    }
  };

  handleReplay = () => {
    this.setState(App.getEmptyBoard());
  };

  render() {
    let {field, playerMove} = this.state;

    let renderButtons = () => {
      return field.map((rowButtonStates, row) => {
        let renderRow = () => {
          return rowButtonStates.map((buttonState, column) => {
            let key = (column + 1) + row * rowButtonStates.length;
            return <Button buttonState={buttonState} onButtonClick={ () => { this.handleButtonClick(row, column)} } key={key}/>
          });
        };

        return (
          <div className="button-row" key={ `row-${row}` }>
            { renderRow() }
            <br/>
          </div>
        );
      });
    };

    return (
      <div className="App">
        <h1>
          <PlayerIcon player={1}/> TicTacToe <PlayerIcon player={-1}/>
        </h1>
        <div className="game-field">
          { renderButtons() }
        </div>
        <GameStatus field={field} playerMove={playerMove} onReplay={this.handleReplay} />

        <a href="https://github.com/naffiq/tic-tac-toe" target="_blank" rel="nofollow">
          <i className="fa fa-github"/> Check it out on GitHub
        </a>
      </div>
    );
  }
}

export default App;
