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
                    src="https://snylloestetica.com/wp-content/uploads/2023/11/sizew-1.png" 
                    class=" big-left-img " 
                    alt ="big-left-img" >
                    </img>
                    <img 
                    src="/upload/big-right-machine.png" 
                    class="big-right-machine" 
                    alt ="big-right-machine" >
                    </img>
              </div>
              
            </div>
        </div>
    );
};

export default Fourth;