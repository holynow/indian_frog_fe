import { useState } from 'react';
import styled from 'styled-components';
import indianFrogMainMusic from '../../assets/audio/IndianFrog_ver1.1.mp3';
import musicPlay from '../../assets/images/icons/musicPlay.svg';

function MusicButton() {
  const [isPlay, setIsPlay] = useState(true);
  return (
    <PlayButtonContainer>
      <button onClick={() => setIsPlay((prev) => !prev)}>
        <img src={musicPlay} />
      </button>
      <AudioCotroller
        src={indianFrogMainMusic}
        controls={isPlay}
        // autoPlay
        loop={true}
      ></AudioCotroller>
    </PlayButtonContainer>
  );
}
const PlayButtonContainer = styled.div`
  z-index: 99;
  position: relative;
  button {
  }
`;
const AudioCotroller = styled.audio`
  position: absolute;
  left: 50%;
  bottom: -70px;
  transform: translateX(-50%);
  &::-webkit-media-controls-panel {
    background-color: #fffdee;
  }
  filter: drop-shadow(-2px -2px 5px rgba(65, 65, 65, 0.1));
`;
export default MusicButton;
