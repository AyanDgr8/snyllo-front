// src/components/routes/Eighth.js

import React from 'react';
import './Eighth.css';

const Eighth = () => {
    return (
        <div>
            <div className='eighth-page-content'>
                <span className='big-heading-7'>
                    <h2>BENEFITS OF</h2>
                    <h3>LASER HAIR REMOVAL</h3>
                </span>
                <div className='eighth-containers'>
                    <div className='eighth-left-container'>
                        <img 
                        src="/upload/eigth-left-first.png" 
                        className="eighth-left-first" 
                        alt ="eighth-left-first"
                        />
                        <img 
                        src="/upload/eigth-left-second.png" 
                        className="eighth-left-second" 
                        alt ="eighth-left-second"
                        />
                        <img 
                        src="/upload/eigth-left-third.png" 
                        className="eighth-left-third" 
                        alt ="eighth-left-third"
                        />
                    </div>
                    <div className='eigth-right-container'>
                        <img src='/upload/forever.png'
                        className='forever'
                        alt='forever'
                        />
                    </div>
                </div>    
            </div>
        </div>
    )
} 

export default Eighth;