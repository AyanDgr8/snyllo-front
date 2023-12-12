// src/components/routes/Fourth.js

import React from 'react';
import './Fourth.css';

const Fourth = () => {
    return (
        <div>
          <div className="fourth-page-content">
              <div className="big-heading-3">
                <h2>LARGE SPOT</h2>
                <h3>SIZE</h3>
              </div>
              {/* Image Containers */}
              <div className="two-images">
                    <img 
                    src="/upload/big-left-img.png" 
                    className="big-left-img" 
                    alt ="big-left-img" >
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