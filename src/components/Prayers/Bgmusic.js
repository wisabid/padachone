import React, {useState, useEffect} from 'react';
import Sound from 'react-sound';
import {useRenderCounts} from '../../hooks/api-hooks';


const Bgmusic = ({bgm, volume=true, setPlaying}) => {
  useRenderCounts('Bgmusic.js')
    const [status, setStatus] = useState('PLAYING');
    const handleLoad = () => {
      console.log('LOADED')
      setPlaying();
      // setStatus('PAUSED');
      // setTimeout(() => {
      //   setStatus('PLAYING');
      // }, 2000)
    }
    useEffect(() => {
      if (!volume) {
        setStatus('PAUSED')
      }
      else {
        setStatus('PLAYING')
      }
    }, [volume])
    return (
        <Sound
          autoLoad={false}
          loop={true}
          url={bgm}
          playStatus={Sound.status[status]}
          // playFromPosition={100 /* in milliseconds */}
          // volume={volume?10:0}
          volume={10}
          // onStop={handleBufferChange}
          onLoad={handleLoad}
          // onPlaying={setPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
        />
    )
}

export default React.memo(Bgmusic);

