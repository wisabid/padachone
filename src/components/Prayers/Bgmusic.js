import React from 'react';
import Sound from 'react-sound';


const Bgmusic = ({bgm, volume=true, setPlaying}) => {
    return (
        <Sound
          autoLoad={true}
          loop={true}
          url={bgm}
          playStatus={Sound.status.PLAYING}
          playFromPosition={100 /* in milliseconds */}
          volume={volume?10:0}
          // onStop={handleBufferChange}
          onLoad={setPlaying}
          // onPlaying={setPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    )
}

export default React.memo(Bgmusic);

