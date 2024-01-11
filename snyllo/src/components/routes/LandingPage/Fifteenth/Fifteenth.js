// src/components/routes/LandingPage/Fifteenth/Fifteenth.js

import React from "react";
import "./Fifteenth.css";
import Header from '../Header/Header';

const Fifteenth = () => {
    return (
        <div>
        <Header />
            <div className="fifteenth-page-content">
                <span className='big-heading-14'>
                    <h2>STRICT SELECTION</h2>
                    <h3>EXQUISITE CRAFTSMANSHIP</h3>
                </span>
                <div className="fifteenth-image-container">
                    <img 
                    src="/upload/15th-1.png" 
                    className="fifteenth-image" 
                    alt ="15th-1"
                    />
                    <img 
                    src="/upload/15th-2.png" 
                    className="fifteenth-image" 
                    alt ="15th-2"
                    />
                    <img 
                    src="/upload/15th-3.png" 
                    className="fifteenth-image" 
                    alt ="15th-3"
                    />
                    <img 
                    src="/upload/15th-4.png" 
                    className="fifteenth-image" 
                    alt ="15th-4"
                    />
                    <img 
                    src="/upload/15th-5.png" 
                    className="fifteenth-image" 
                    alt ="15th-5"
                    />
                    <img 
                    src="/upload/15th-6.png" 
                    className="fifteenth-image" 
                    alt ="15th-6"
                    />
                    <img 
                    src="/upload/15th-7.png" 
                    className="fifteenth-image" 
                    alt ="15th-7"
                    />
                    <img 
                    src="/upload/15th-8.png" 
                    className="fifteenth-image" 
                    alt ="15th-8"
                    />
                </div>
            </div>
        </div>
    )
}

export default Fifteenth;