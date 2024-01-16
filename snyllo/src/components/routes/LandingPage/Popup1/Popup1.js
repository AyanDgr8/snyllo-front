// src/components/routes/LandingPage/Popup1/Popup1.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Popup1.css';

const Popup1 = () => {
    const [isPopupVisible, setPopupVisibility] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPopupVisibility(true);
        }, 10000); // 10 seconds delay

        // Clear the timeout to avoid setting the state after unmounting
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array to ensure useEffect runs only once

    const closePopup = () => {
        setPopupVisibility(false);
    };

    return (
        <>
            {isPopupVisible && (
                <div className='popup1-container'>
                    <div className='popup1-content'>
                        <button className='popup1-close-button' onClick={closePopup}>
                        &times;
                        </button>
                        <h2 className='popup1-container-line1'>Need flawless skin ?</h2>
                        <p className='popup1-container-line2'>
                            Looking for immediate appointments and best deals on our packages?
                            Contact our customer care for prompt assistance!
                        </p>
                        <Link to="/form-LHR">
                            <button className='popup1-container-button'>Get Set Glow</button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup1;
