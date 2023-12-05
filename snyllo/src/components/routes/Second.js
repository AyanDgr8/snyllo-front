// src/components/routes/Second.js

import React, { useEffect, useRef } from 'react';
import './Second.css';

const Second = () => {
  const bigHeadingRef = useRef(null);
  const girlImagesRef = useRef(null);
  const machineImagesRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const bigHeadingObserver = new IntersectionObserver(handleIntersection, options);
    bigHeadingObserver.observe(bigHeadingRef.current);

    const girlImagesObserver = new IntersectionObserver(handleIntersection, options);
    girlImagesObserver.observe(girlImagesRef.current);

    const machineImagesObserver = new IntersectionObserver(handleIntersection, options);
    machineImagesObserver.observe(machineImagesRef.current);

    return () => {
      bigHeadingObserver.disconnect();
      girlImagesObserver.disconnect();
      machineImagesObserver.disconnect();
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  };
  return (
    <div>
      <span className="second-page-content">
          <div className="big-heading-1" ref={bigHeadingRef}>
            <h2>FOR EVERY SKINTONE</h2>
            <h3>EFFORTLESS BEAUTY</h3>
          </div>

          {/* Image Containers */}
          <div className="girl-image-containers" ref={girlImagesRef}>
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
          <div className="machine-image-containers" ref={machineImagesRef}>
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
