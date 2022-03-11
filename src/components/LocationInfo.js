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
            
            
            <div className='Content'>
            <h2>Location name : {location.name}</h2>
            <h2>Location ID: {location.id}</h2>
            <h2>Location Type: {location.type}</h2>
            <h2>Dimention: {location.dimension}</h2>
            <p>Residents: {location.residents?.length}</p>
           {population ? (
               <ResidentsList residentAPI = {location.residents}></ResidentsList>
           ):
           <p>No population Here</p>}
            </div>
        </>
    );
};
export default LocationInfo;