// src/components/routes/First.js

import React from 'react';
import Header from './Header';
import './First.css';  // You can import any additional styles if needed

const First = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />
      <div className="first-page-content">
        {/* Left side text content */}
        <div className='left-content-first'>
          <div className="left-images-first">
            <img    
              src="https://snylloestetica.com/wp-content/uploads/2023/11/Epilax-Logos-w.png" 
              className="epilazexleft" 
              alt="epilazexleft">
            </img>
          </div>
        
          <div className="left-para">
            <div className="firstline">HAIR REMOVAL</div>
            <div className="secondline">REDEFINED AT HOME</div>
            <div className="thirdline">No More Monthly Hair Removal Fuss</div>
          </div>
          
          <div className="left-icons-wrapper">
            <div className="left-icons-container">
              {/* Replace with your desired icons */}
              <span className="icon1">
                <img  
                  src="https://snylloestetica.com/wp-content/uploads/2023/11/ist-icon.png" 
                  className="icon1img" 
                  alt="icon1img" 
                />
                <span className="icon1caption">
                  <h3>FOREVER READY</h3>
                  <h4>With Zero Prep</h4>
                </span>
              </span>
                
              <span className="icon2">
                <img  
                  src="https://snylloestetica.com/wp-content/uploads/2023/11/icn-2.png" 
                  className="icon2img" 
                  alt="icon2img"
                />
                <span className="icon2caption">
                  <h3>SMOOTH SKIN</h3>
                  <h4>No more in grown hair, bumps, stubble</h4>
                </span>
              </span>

              <span className="icon3">
                <img 
                  src="https://snylloestetica.com/wp-content/uploads/2023/11/iocn-34.png" 
                  className="icon3img" 
                  alt="icon3img"
                />
                <span className="icon3caption">
                  <h3>PAINLESS</h3>
                  <h4>Ice Cool Tech for a Painless Experience</h4>
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="right-content-first">
          <img 
            src="https://snylloestetica.com/wp-content/uploads/2023/11/Layer-w-1.png" 
            className="twomachinesright" 
            alt="twomachinesright">
          </img>
        </div>
      </div>
    </div>
  );
};

export default First;
