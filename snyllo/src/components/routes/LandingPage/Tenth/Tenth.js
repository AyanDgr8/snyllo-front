// src/components/routes/LandingPage/Tenth/Tenth.js



import React from 'react';
import './Tenth.css';
import { Link } from 'react-router-dom'; 
import Header from '../Header/Header';

const Tenth = () => {
    return (
        <div>
        <Header />
            <div className='tenth-page-content'>
                <span className='swipe-form'>
                    <img 
                        src="/upload/gun-icon.png" 
                        className="gun-icon" 
                        alt ="gun-icon" 
                        />
                    <Link to="/form-LHR" className='swipe-form-content'> 
                        Hurry Grab Your First LHR Trial Session @ just ₹499/-
                    </Link>
                </span>
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
                        src="/upload/tenth-img.png" 
                        className="tenth-img" 
                        alt ="tenth-img" 
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tenth;
