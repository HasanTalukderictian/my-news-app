import React from 'react';
import pzone1 from '../../../assets/1.png'
import pzone2 from '../../../assets/2.png'
import pzone3 from '../../../assets/3.png'

const PZone = () => {
    return (
        <div className='bg-white text-center my-4 py-4'>
            
            <div>
                <img src={pzone1} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <p>Sports</p>
                <img src={pzone2} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <p>Sports</p>
                <img src={pzone3} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <p>Sports</p>
            </div>
        </div>
    );
};

export default PZone;