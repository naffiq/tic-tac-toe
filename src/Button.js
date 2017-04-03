import React, {Component} from 'react';

class Button extends Component {
  constructor() {
    super();

    this.state = {
      buttonClass: '',
      iconClass: '',
    };
  }

  componentDidMount() {
    this.setState(Button.getStateByProps(this.props));
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Button.getStateByProps(nextProps));
  }

  static getStateByProps(props) {
    let {buttonState} = props;

    return {
      buttonClass: buttonState === 0 ? 'empty' : (buttonState === 1 ? 'circle' : 'cross'),
      iconClass: buttonState === -1 ? 'fa fa-circle-o' : 'fa fa-close'
    };
  }

  render() {
    let {buttonState, onButtonClick} = this.props;
    let {buttonClass, iconClass} = this.state;
    let renderIcon = () => {
      if (buttonState === 0) {
        return '';
      }

      return <i className={iconClass} />;
    };

    return (
        <button className={buttonClass} onClick={onButtonClick}>
          { renderIcon() }
        </button>
    );
  }
}

export default Button;