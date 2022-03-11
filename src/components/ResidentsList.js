import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';


const ResidentsList = ({residentAPI}) => {
    
const [info, setInfo] = useState({})
useEffect(()=>{
    axios.get({residentAPI})
    .then(res=>(setInfo(res.value)))
},[residentAPI])
    return (
        <div>
            {
                residentAPI?.map(residentUrl => (
     
                        <ResidentInfo
                         key={residentUrl}
                         residentUrl={residentUrl}/>
             
                ))
                
            }
        </div>
    );
};

export default ResidentsList;