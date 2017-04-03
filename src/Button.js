import React, {Component} from 'react';
import PlayerIcon from './PlayerIcon';

class Button extends Component {
  render() {
    let {buttonState, onButtonClick} = this.props;

    return (
        <button className="field-button" onClick={onButtonClick}>
          <PlayerIcon player={buttonState}/>
        </button>
    );
  }
}

export default Button;