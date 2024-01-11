// src/components/routes/LandingPage/First/First.js

import React, { useState, useEffect, useRef } from 'react';
import './First.css';  
import Popup from '../Popup/Popup';
import Header from '../Header/Header';

const First = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    // Intersection Observer setup
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px', // no margin
      threshold: 0.5, // trigger when 50% of the element is visible
    };

    const leftContentObserver = new IntersectionObserver(handleIntersection, options);
    leftContentObserver.observe(leftContentRef.current);

    const rightContentObserver = new IntersectionObserver(handleIntersection, options);
    rightContentObserver.observe(rightContentRef.current);

    return () => {
      // Cleanup the observers
      leftContentObserver.disconnect();
      rightContentObserver.disconnect();
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add your animation class here
        entry.target.classList.add('animate');
      }
    });
  };
  

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isMobileMenuActive ? 'hidden' : 'auto';
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = 'auto'; // Reset overflow on unmount or whenever needed
    };
  }, [isMobileMenuActive]);

  return (
    <div className="first-page-wrapper">
      <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src="/upload/first-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Header />
      <div className="first-page-content">
        {/* Left side text content */}
        <div className='left-content-first' ref={leftContentRef}>
          <div className="left-images-first" >
            <img    
              src="/upload/testing.png" 
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
                  src="/upload/icon1img.png" 
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
                  src="/upload/icon2img.png"
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
                  src="/upload/icon3img.png"
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
        <div className="right-content-first" ref={rightContentRef}>
          <div className="twomachinesright " onClick={openPopup}>
            <img 
              src="/upload/twomachinesright.png" 
              className="twomachinesright" 
              alt="twomachinesright"
            />
          </div>
        </div>
        {/* Conditionally render Popup based on state */}
        {isPopupOpen && <Popup onClose={closePopup} />}
      </div>
    </div>
  );
};

export default First;
