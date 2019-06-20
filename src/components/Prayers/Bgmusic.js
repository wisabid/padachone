import React, {useState} from 'react';
import Sound from 'react-sound';


const Bgmusic = ({bgm, volume=true, setPlaying}) => {
    const [status, setStatus] = useState('PLAYING');
    const handleLoad = () => {
      console.log('LOADED')
      setPlaying();
      setStatus('PAUSED');
      setTimeout(() => {
        setStatus('PLAYING');
      }, 2000)
    }
    return (
        <Sound
          autoLoad={false}
          loop={true}
          url={bgm}
          playStatus={Sound.status[status]}
          playFromPosition={100 /* in milliseconds */}
          volume={volume?10:0}
          // onStop={handleBufferChange}
          onLoad={handleLoad}
          // onPlaying={setPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    )
}

export default React.memo(Bgmusic);

