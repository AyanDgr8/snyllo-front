// src/components/routes/LandingPage/Eleventh/Eleventh.js

import React from 'react';
import './Eleventh.css';
import Header from '../Header/Header';

const Eleventh = () => {
    return (
        <div>
        <Header />
            <div className='eleventh-page-content'>
                <span className='big-heading-10'>
                    <h2>DOUBLE FILTER</h2>
                    <h3>TWICE THE PROTECTION</h3>
                </span>

                <div className='eleventh-container'>
                    <div className='eleventh-left-container'>
                        <img 
                        src="/upload/Eleventh-img.png"
                        className="eleventh-img" 
                        alt ="eleventh-img" 
                        />
                    </div>
                    <div className='eleventh-right-container'>
                        <p>Fitted with an advanced two-stage water fitrations system. 
                            The first stage adopts PP-Cotton to Filter out impurities 
                            and Prevent Laser Blockage. The Second Stage Uses Resign to 
                            Filter out Metal Ions, Avoiding Inner Laser Corrosion and 
                            Prolonging Life System.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Eleventh;
