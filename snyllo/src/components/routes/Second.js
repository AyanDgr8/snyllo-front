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
            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/rectangle4-W.png" 
            class="girl-images girl1" 
            alt ="girl1">
            </img>
                
            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/rectangle2-W.png" 
            class="girl-images girl2" 
            alt ="girl2" >
            </img>
            
            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/rectangle3-W.png" 
            class="girl-images girl3" 
            alt ="girl3">
            </img>
            
            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/rectangle1-W.png" 
            class="girl-images girl4" 
            alt ="girl4" >
            </img>
          </div>
          <div className="machine-image-containers">
            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/1W.png" 
            class="machine-images machine1" 
            alt="smachine1">
            </img>

            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/2-W.png" 
            class="machine-images machine2" 
            alt="smachine2">
            </img>

            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/3W.png" 
            class="machine-images machine3" 
            alt="smachine3" >
            </img>

            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/4W.png" 
            class="machine-images machine4" 
            alt="smachine4">
            </img>

          </div>
        </span>
    </div>
  );
};

export default Second;
