// src/components/routes/Second.js

import React from 'react';
import './Second.css';

const Second = () => {
  return (
    <div>
      <span className="second-page-content">
          <div className="big-heading-1">
            <h2>FOR EVERY SKINTONE</h2>
            <h3>EFFORTLESS BEAUTY</h3>
          </div>

          {/* Image Containers */}
          <div className="girl-image-containers">
            <img src="/upload/girl1.png" 
            class="girl-images girl1" 
            alt ="girl1">
            </img>
                
            <img src="/upload/girl2.png" 
            class="girl-images girl2" 
            alt ="girl2" >
            </img>
            
            <img src="/upload/girl3.png" 
            class="girl-images girl3" 
            alt ="girl3">
            </img>
            
            <img src="/upload/girl4.png"  
            class="girl-images girl4" 
            alt ="girl4" >
            </img>
          </div>
          <div className="machine-image-containers">
            <img src="/upload/machine1.png" 
            class="machine-images machine1" 
            alt="machine1">
            </img>

            <img src="/upload/machine2.png" 
            class="machine-images machine2" 
            alt="smachine2">
            </img>

            <img src="/upload/machine3.png"
            class="machine-images machine3" 
            alt="smachine3" >
            </img>

            <img src="/upload/machine4.png" 
            class="machine-images machine4" 
            alt="smachine4">
            </img>

          </div>
        </span>
    </div>
  );
};

export default Second;
