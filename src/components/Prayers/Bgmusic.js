import React from 'react';
import Sound from 'react-sound';


const Bgmusic = ({bgm}) => {
    return (
        <Sound
          autoLoad={true}
          loop={true}
          url={bgm}
          playStatus={Sound.status.PLAYING}
          playFromPosition={100 /* in milliseconds */}
          volume={10}
          // onStop={handleBufferChange}
          // onLoading={this.handleSongLoading}
          // onPlaying={handleBufferChange}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    )
}

export default React.memo(Bgmusic);

