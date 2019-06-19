import React from 'react';
import MusicOn from '@material-ui/icons/MusicNote';
import MusicOff from '@material-ui/icons/MusicOff';

const MusicOption = ({volume, setVolume}) => {
    const handleChange = () => {
        setVolume(!volume);
    }
    return (
        <>
            {volume
                ?<MusicOn fontSize="small" style={{color:'#fff'}} onClick={handleChange}/>
                :<MusicOff fontSize="small" style={{color:'#fff'}} onClick={handleChange}/>
            }
                
        </>
    )

}

export default MusicOption;