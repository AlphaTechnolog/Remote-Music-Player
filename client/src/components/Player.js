import React, { useContext } from 'react';
import { globalContext } from '../context/global';

const Player = () => {
  const {
    content,
    completePlayerMusic,
    actualPlayerMusic,
    setActualPlayerMusic,
  } = useContext(globalContext);

  const handleEnd = () => {
    if (content.files.indexOf(actualPlayerMusic) !== content.files.length - 1) {
      const newIndex = content.files.indexOf(actualPlayerMusic) + 1;
      setActualPlayerMusic(content.files[newIndex]);
    }
  }

  return (
    <div className="player-bar">
      <video
        width="100%"
        height="25"
        id="player"
        autoPlay
        controls
        src={completePlayerMusic}
        onEnded={handleEnd}
      />
    </div>
  )
}

export default Player
