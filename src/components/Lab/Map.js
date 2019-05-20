import React, {useState} from 'react'
import { ReactBingmaps } from 'react-bingmaps';

const Bing = ({lat, lon}) => {
    const callBackMethod = () => {

    }
    const [pushpin, setPushpin] = useState([{
      "location":[lat, lon], "option":{ color: 'blue' }, "addHandler": {"type" : "click", callback: callBackMethod }
  }])
    // const [dir, setDir] = useState({
      
    //     "renderOptions": {"itineraryContainer": "itineraryContainer" },
    //     "requestOptions": {"routeMode": "walking", "maxRoutes": 2},
    //     "wayPoints": [
    //           {
    //             address: 'Bijlmer'
    //           },
    //           {
    //             address: 'Ijburg'
    //           }
    //         ]
    //   })

      const [boundary, setBoundary] = useState({
        "search" : "Ijburg",
        "polygonStyle" :{
          fillColor: 'rgba(161,224,255,0.4)',
          strokeColor: '#a495b2',
          strokeThickness: 2
        },
        "option":{
          entityType: 'PopulatedPlace'
        }
      });

      const AddPushPinOnClick = (location) => {
        setPushpin([{
          "location":[lat, lon], "option":{ color: 'red' }, "addHandler": {"type" : "click", callback: callBackMethod }
      }])
      }
    return (
        <>
        <ReactBingmaps 
            bingmapKey = "ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP" 
            center = {[lat, lon]}
            zoom={10}  
            pushPins = {pushpin}
            // query="Nearest Mosque" 
            // directions = {dir} 
            // boundary={boundary}
            // getLocation = {
            //   {addHandler: "click", callback:AddPushPinOnClick}
            // }
        /> 
        </>
    )
}

export default Bing;