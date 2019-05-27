import React from 'react';
import Sound from 'react-sound';
import coolmp3 from '../../assets/mp3/bgmusic.mp3'

const Bgmusic = (props) => {
    return (
        <Sound
          autoLoad={true}
          loop={true}
          url={coolmp3}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
          volume={2}
          // onStop={handleBufferChange}
          // onLoading={this.handleSongLoading}
          // onPlaying={handleBufferChange}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    )
}

export default React.memo(Bgmusic);

