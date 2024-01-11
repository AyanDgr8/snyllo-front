// src/components/routes/Benefits/Benefits.js

import React from 'react';
import './Benefits.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';

// import Popup from '../LandingPage/Popup';

const Benefits = () => {
  return (
    <div>
    <div className="video-background">
      <video autoPlay loop muted className="video">
        <source src="/upload/first-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <Header />
      <div className="benefits-page">
        <div className="first-container-benefits" >
          <img    
            src="/upload/testing.png" 
            className="epilazexbenefits" 
            alt="epilazexbenefits">
          </img>
          <span className="big-heading-benefits">
            <h1 className='heading-benefits'>BENEFITS OF LASER HAIR REMOVAL</h1>
          </span>
          <span className='firstline-benefits'>
            <p>
              SAY GOODBYE TO THE HASSLES OF TRADITIONAL HAIR REMOVAL METHODS
            </p>
          </span>
        </div>
        
        <h2 className='benefits-container-1-heading1'>UNLEASH YOUR RADIANCE: THE POWER AND ALLURE OF LASER HAIR REMOVAL!</h2>
        <div className='benefits-container-1'>
          <span className='benefits-container-1-left'>
            <img    
              src="/upload/benefits-container-1-left-girl.webp" 
              className="benefits-container-1-left-girl" 
              alt="benefits-container-1-left-girl">
            </img>
          </span>
          <span className='benefits-container-1-right'>
            <ul>
              <li className='benefits-container-1-headings'>Quick and Efficient Treatments</li>
              <p className='benefits-container-1-para'>Laser hair removal treatments are remarkably swift, taking approximately 20 minutes 
                for areas like underarms or the bikini area and just about an hour for larger areas such 
                as arms and legs. Enjoy the efficiency of being in and out of the spa in no time.                
              </p>
              <li className='benefits-container-1-headings'>Cost-Effective in the Long Run</li>
              <p className='benefits-container-1-para'>Save money by opting for laser hair removal. Eliminate the need for constant purchases of 
                razors, shaving cream, and waxing appointments. With the decreasing cost of laser hair removal 
                and the increasing cost of waxing, it's a financially savvy choice with longer-lasting results.
              </p>
              <li className='benefits-container-1-headings benefits-container-1-headingss-1'> Elimination of Ingrown Hairs</li>
              <p className='benefits-container-1-para'>Say goodbye to pesky ingrown hairs. Laser hair removal is an effective solution 
                to prevent and eliminate ingrown hairs, making it an ideal choice for those with 
                sensitive skin prone to irritation after shaving or waxing.
              </p>
              <li className='benefits-container-1-headings benefits-container-1-headingss-2'>Time-Saving Solution</li>
              <p className='benefits-container-1-para'>Bid farewell to the hassle of daily shaving or regular waxing appointments. 
                Laser hair removal saves you time, ensuring clean-shaven skin without the 
                need for constant maintenance.
              </p>
              <li className='benefits-container-1-headings benefits-container-1-headingss-3'>Permanent Liberation</li>
              <p className='benefits-container-1-para'>Unlike waxing, laser hair removal allows you to shave between sessions. 
                No need to wait for hair to grow out – enjoy the flexibility of shaving as much as you want.
              </p>
            </ul>
          </span>
        </div>

        <div className='benefits-container-2'>
          <h2 className='benefits-container-2-heading'>GOODBYE FUZZ, HELLO DAZZLE – LASER HAIR REMOVAL, YOUR BEAUTY'S TRUE MARVEL!</h2>
          <img    
              src="/upload/benefits-container-2-LHR.png" 
              className="benefits-container-2-LHR" 
              alt="benefits-container-2-LHR">
          </img>
        </div>

        <h2 className='benefits-container-3-heading3'>EFFORTLESS ELEGANCE, WHERE LASER PRECISION MEETS THE LUXURY OF PERPETUAL SMOOTHNESS.</h2>
        <div className='benefits-container-3'>
          <span className='benefits-container-3-left'>
            <ul>
              <li className='benefits-container-3-headings benefits-container-3-headingss-1'>Time and Cost Efficiency</li>
              <p className='benefits-container-3-para'>
                Laser hair removal not only saves you precious time by eliminating the need for daily shaving 
                routines but also offers long-term cost savings, making it a practical and economical choice.
              </p>
              <li className='benefits-container-3-headings benefits-container-3-headingss-2'> Confidence in Every Step</li>
              <p className='benefits-container-3-para'>
                Flaunt your confidence with silky-smooth skin that not only looks great but also feels incredible, 
                enhancing your overall sense of self-assurance.
              </p>
              <li className='benefits-container-3-headings benefits-container-3-headingss-3'>Effortless Smoothness</li>
              <p className='benefits-container-3-para'>
                Experience the luxury of smooth skin without the daily hassle of shaving, bidding farewell to irritation and razor burn drama.                
              </p>
              <li className='benefits-container-3-headings benefits-container-3-headingss-4'> Wax-Free Comfort</li>
              <p className='benefits-container-3-para'>
                Embrace the gentle glow of laser hair removal, saying goodbye to 
                painful waxing sessions and welcoming a more comfortable hair removal experience.
              </p>
              <li className='benefits-container-3-headings benefits-container-3-headingss-5'>Shave Between Treatments Permanent Liberation</li>
              <p className='benefits-container-3-para'>
                Enjoy the freedom from unwanted hair with a semi-permanent or permanent reduction in hair growth, 
                liberating yourself from the constant cycle of hair removal.
              </p>
            </ul>
          </span>
          <span className='benefits-container-3-right'>
            <img    
                src="/upload/benefits-container-3-right-girl.png" 
                className="benefits-container-3-right-girl" 
                alt="benefits-container-3-right-girl">
            </img>
          </span>
        </div>
      </div>
    <Footer />
  </div>
  );
};

export default Benefits;
