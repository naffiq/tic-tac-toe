import React from 'react';

const PlayerIcon = (props) => {
  let {player} = props;
  if (player === 0) {
    return <i/>;
  }
  let icon = player === 1 ? 'circle-o' : 'close';
  return <i className={ `fa fa-${ icon }` } />
};

export default PlayerIcon;