// src/components/routes/LandingPage/Fourth/Fourth.js

import React from 'react';
import './Fourth.css';
import Header from '../Header/Header';

const Fourth = () => {
    return (
        <div>
        <Header />
          <div className="fourth-page-content">
              <div className="big-heading-3">
                <h2>LARGE SPOT</h2>
                <h3>SIZE</h3>
              </div>
              <p className='sub-heading-fourth'>
                The large spot size brings the deeper laser skin 
                penetration and faster hair removal treatment speed.
              </p>
              {/* Image Containers */}
              <div className="two-images">
                    <img 
                    src="/upload/big-left-img.png" 
                    className="big-left-img" 
                    alt ="big-left-img" >
                    </img>
                    
                    <img 
                    src="/upload/pink-circle.png" 
                    className="pink-circle" 
                    alt ="pink-circle" >
                    </img>
                    <img 
                    src="/upload/big-right-machine.png" 
                    className="big-right-machine" 
                    alt ="big-right-machine" >
                    </img>
              </div>
              
            </div>
        </div>
    );
};

export default Fourth;