import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ residentUrl }) => {


const [resident, setResident] = useState({});

    useEffect(() => {
        axios.get(residentUrl)
            .then(res => setResident(res.data));
    }, [ residentUrl]);
    return (
        <div className='Card'> 
          <p> Name:  {resident.name}</p>
            <p> Status: {resident.status}</p>
            <p>Specie:{resident.species}</p>
            <p>Origin: {resident.origin?.name}</p>
            <p>episodes: {(resident.episode?.length)}</p>
            <img alt="character" src={resident.image}></img>
        </div>
    );
};

export default ResidentInfo;