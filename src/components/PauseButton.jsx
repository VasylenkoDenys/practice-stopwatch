import React from 'react';

const PauseButton = (props) => {
  const {onClick} = props;
  return (
      <button className="btnPause" onClick={onClick}>Pause</button>
  );
}

export default PauseButton;
