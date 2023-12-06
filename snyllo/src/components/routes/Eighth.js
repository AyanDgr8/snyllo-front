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
                        class="eighth-left-first" 
                        alt ="eighth-left-first"
                        />
                        <img 
                        src="/upload/eigth-left-second.png" 
                        class="eighth-left-second" 
                        alt ="eighth-left-second"
                        />
                        <img 
                        src="/upload/eigth-left-third.png" 
                        class="eighth-left-third" 
                        alt ="eighth-left-third"
                        />
                    </div>
                    <div className='eigth-right-container'>
                        <img src='/upload/eigth-right-machine.png'
                        className='eighth-right-machine'
                        alt='eighth-right-machine'
                        />
                        <img src='/upload/eighth-right-legs.png'
                        className='eighth-right-legs'
                        alt='eighth-right-legs'
                        />
                    </div>
                </div>    
            </div>
        </div>
    )
} 

export default Eighth;