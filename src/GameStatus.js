import React, {Component} from 'react';
import GameRules from './GameRules';
import PlayerIcon from './PlayerIcon';
import './GameStatus.css';

class GameStatus extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let {field, playerMove, onReplay} = this.props;
    let renderStatusText = () => {
      let winner = GameRules.hasWinner(field);
      if (winner === 0) {
        if (GameRules.isDraw(field)) {
          return (
            <span className="draw">DRAW!</span>
          )
        } else {
          return (
            <span>
              <PlayerIcon player={playerMove}/>'s move
            </span>
          )
        }
      } else {
        return (
          <span>
            <PlayerIcon player={winner}/> WON!
          </span>
        );
      }
    };

    let renderReplayButton = () => {
      if (GameRules.hasWinner(field) || GameRules.isDraw(field)) {
        return <button onClick={onReplay}><i className="fa fa-refresh"/> Replay</button>;
      }
      return '';
    };

    return (
      <div className="status-bar">
        { renderStatusText() }
        { renderReplayButton() }
      </div>
    );
  }
}

export default GameStatus;