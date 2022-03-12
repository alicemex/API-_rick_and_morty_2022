import React from 'react';
import ResidentInfo from './ResidentInfo';


const ResidentsList = ({residentAPI}) => {
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