import React, {Component} from 'react';
import './App.css';
import Button from './Button';
import GameStatus from './GameStatus';
import GameRules from './GameRules';

class App extends Component {
  initState = {
    field: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    playerMove: 1
  };

  constructor() {
    super();

    this.state = this.initState;
    this.handleReplay.bind(this);
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

  handleReplay() {
    this.setState(this.initState);
  }

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
        { renderButtons() }
        <GameStatus field={field} playerMove={playerMove} onReplay={this.handleReplay} />
      </div>
    );
  }
}

export default App;
