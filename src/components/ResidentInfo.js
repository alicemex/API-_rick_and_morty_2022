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
            <ul>
            <li> Name:  {resident.name}</li>
                <li> Status: {resident.status}</li>
                <li>Specie:{resident.species}</li>
                <li>Origin: {resident.origin?.name}</li>
                <li>episodes: {(resident.episode?.length)}</li>
                <li><img alt="character" src={resident.image}></img>
            </li>
            </ul>
         </div>
    );
};

export default ResidentInfo;