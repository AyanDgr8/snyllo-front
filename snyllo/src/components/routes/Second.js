// src/components/routes/Second.js

import React from 'react';
import './Second.css';

const Second = () => {
  return (
    <div>
      <div className="second-page-content">
        <div className="second-main-content">
          <div className="big-heading">
            <h1>FOR EVERY SKINTONE</h1>
            <h2>EFFORTLESS BEAUTY</h2>
          </div>

          {/* Image Containers */}
          <div className="image-containers">
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
        </div>
      </div>
    </div>
  );
};

export default Second;
