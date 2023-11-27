// src/components/routes/Tenth.js



import React from 'react';
import './Tenth.css';

const Tenth = () => {
    return (
        <div>
            <div className='tenth-page-content'>
                <span className='big-heading-9'>
                    <h2>INTELLIGENT TEMPERATURE</h2>
                    <h3>MONITORING SYSTEM</h3>
                </span>

                <div className='tenth-container'>
                    <div className='tenth-left-container'>
                        <p>A high precision PT100 temperature sensor is built into the applicator adopting 
                            a PID algorithm,which controls the sapphire crystal temperature and maintains 
                            a constant 4 degree celsius, ensuring the skin is well protected.
                        </p>
                    </div>
                    <div className='tenth-right-container'>
                        <img 
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/HAIR-REMOVAL-SCaNNERw.png" 
                        class="tenth-img" 
                        alt ="tenth-img" 
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tenth;
