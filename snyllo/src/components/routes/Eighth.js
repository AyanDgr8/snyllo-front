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
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/2-3-days.png" 
                        class="eighth-left-one" 
                        alt ="eighth-left-one"
                        />
                        <img 
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/7-10days.png" 
                        class="eighth-left-second" 
                        alt ="eighth-left-second"
                        />
                        <img 
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/2-3-weeks-1.png" 
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