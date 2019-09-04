import React, {useState, useEffect} from 'react';
import Zoom from '@material-ui/core/Zoom';
import LocationText from './LocationText';
import {useRenderCounts, useCmsAsset} from '../../hooks/api-hooks';
import Bgmusic from '../Prayers/Bgmusic'
import bgm from '../../assets/mp3/quietTime.mp3';
import {PRISMIC_PRAYERTIME_BOY_BG} from '../../utils/constants';

const styles = {
    height:'250px', 
    backgroundSize: 'auto 100%', 
    backgroundRepeat:'no-repeat', 
    width: '100%', 
    backgroundPosition: 'center', 
    padding: '50% 0', 
    fontSize: '2rem', 
    fontWeight: 'bold', 
    color: 'rgb(3, 155, 229)',
    backgroundColor: '#fff'    
};



const PrayerTime = ({anim, setAnim, travel=false, location=''}) => {
    const [angelimage, SetAngelimage] = useState('')
    const asset = useCmsAsset(PRISMIC_PRAYERTIME_BOY_BG);
    useEffect(() => {
        if (asset.length) {
            SetAngelimage(asset[0].assetImage.url)
        }
      }, [asset])
    useRenderCounts('PrayerTime.js');
    // const [music, setMusic] = useState({show: false, playing : false});
    // const [volume, setVolume] = React.useState(true);
    // useEffect(() => {
    //     if (anim[0]) {
    //         setVolume(true);
    //     }
    //     else {
    //         setVolume(false);
    //     }
    // }, [anim])
    return (
        <>
        {/* <Bgmusic bgm={bgm} volume={volume} setPlaying={() => {setMusic({show: true, playing : true})}}/> */}
        <Zoom in={anim[0]}>
            <div style={{overflow: 'hidden'}}>                
                    {anim[0] && <div className="Prayer-time" 
                        style={{...styles, backgroundImage:`url(${angelimage})`}}>
                            {anim[1]} Time
                            {travel && <>
                                <br />
                                <LocationText location={location}/>
                            </>}
                        </div>
                    }
            </div>
        </Zoom>
        </>
    )
}

export default PrayerTime;