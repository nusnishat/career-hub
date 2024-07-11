import React from 'react';
import './ShareBanner.css';
const SharedBanner = ({title}) => {
    return (
        <div className='banner h-52'>
            <h1 className=' py-16 text-center font-bold text-3xl'>{title}</h1>
        </div>
    );
};

export default SharedBanner;