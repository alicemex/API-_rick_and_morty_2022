import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBox from './SearchBox ';
import ResidentsList from './ResidentsList';

const LocationInfo = () => {
const [location, setLocation] = useState({});
let population=false;

useEffect(()=>{
    const random= Math.floor(Math.random()*126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res => setLocation(res.data))
},[]);

if(location.residents?.length >0 ){
     population = true;
}else {population = false;}
    return (
        <>
            <div className="Hero">
            <div className="coverHero">
            <SearchBox setLocation={setLocation}></SearchBox>
            </div>
            </div>
            
            
            <div className='UnderHero'>
           <ul>
               <li>
                    Location name : {location.name}            
               </li>
               <li>
               Location ID: {location.id}
               </li>
               <li>Location Type: {location.type}</li>
               <li>
               Dimention: {location.dimension}</li>

                   
           </ul>
            </div>
            <div className='Content'>
            <h2>Residents: {location.residents?.length}</h2>
                    {population ? (
                        <ResidentsList residentAPI = {location.residents}></ResidentsList>
                    ):
                    <p>No population Here</p>}
            </div>
        </>
    );
};
export default LocationInfo;