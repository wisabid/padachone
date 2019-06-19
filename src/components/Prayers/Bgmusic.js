import React from 'react';
import Sound from 'react-sound';


const Bgmusic = ({bgm, volume=true}) => {
    return (
        <Sound
          autoLoad={true}
          loop={true}
          url={bgm}
          playStatus={Sound.status.PLAYING}
          playFromPosition={100 /* in milliseconds */}
          volume={volume?10:0}
          // onStop={handleBufferChange}
          // onLoading={this.handleSongLoading}
          // onPlaying={handleBufferChange}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    )
}

export default React.memo(Bgmusic);

