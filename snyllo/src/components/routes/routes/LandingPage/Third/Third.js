// src/components/routes/LandingPage/Third/Third.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Third.css';
import Header from '../Header/Header';


const Third = () => {
  const [activeGender, setActiveGender] = useState('women');

  const handleGenderToggle = (gender) => {
    setActiveGender(gender);
  };

  const toggleGender = () => {
    setActiveGender((prevGender) => (prevGender === 'women' ? 'men' : 'women'));
  };

  
  const womenImages = [
      "/upload/women-body-1.png",
      "/upload/women-body-2.png",
      "/upload/women-body-1.png",
      "/upload/women-body-2.png",
      "/upload/women-hand-1.png",
      "/upload/women-hand-2.png",
      "/upload/women-hand-3.png",
      "/upload/women-hand-4.png",
      "/upload/women-hand-5.png",
      "/upload/women-body-1.png",
      "/upload/women-body-2.png",
      "/upload/women-legs-1.png",
      "/upload/women-legs-2.png",
      "/upload/women-legs-3.png",
      "/upload/women-legs-4.png",
      "/upload/women-legs-5.png",
      "/upload/women-legs-6.png",
      "/upload/women-face-1.png",
      "/upload/women-face-2.png",
      "/upload/women-face-3.png",
      "/upload/women-face-4.png",
      "/upload/women-face-5.png",
      "/upload/women-face-6.png",
      "/upload/women-chest-1.png",
      "/upload/women-chest-2.png",
      "/upload/women-chest-3.png",
      "/upload/women-chest-4.png",
      "/upload/women-chest-5.png",
      "/upload/women-back-1.png",
      "/upload/women-back-2.png",
      "/upload/women-back-3.png",
    ];
    const menImages = [
      "/upload/men-bikini-1.png",
      "/upload/men-bikini-1.png",
      "/upload/men-hand-1.png",
      "/upload/men-hand-2.png",
      "/upload/men-hand-3.png",
      "/upload/men-hand-4.png",
      "/upload/men-hand-5.png",
      "/upload/men-hand-6.png",
      "/upload/men-bikini-1.png",
      "/upload/men-bikini-2.png",
      "/upload/men-bikini-3.png",
      "/upload/men-bikini-4.png",
      "/upload/men-bikini-5.png",
      "/upload/men-bikini-6.png",
      "/upload/men-legs-1.png",
      "/upload/men-legs-2.png",
      "/upload/men-legs-3.png",
      "/upload/men-legs-4.png",
      "/upload/men-legs-5.png",
      "/upload/men-legs-6.png",
      "/upload/men-bikini-1.png",
    ];

    const images = activeGender === 'women' ? womenImages : menImages;

    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 2500,
      slidesToShow: window.innerWidth <= 600 ? 1 : 3, // Show 1 slide on mobile, 3 slides otherwise
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      prevArrow: <div className="slick-arrow slick-prev"></div>,
      nextArrow: <div className="slick-arrow slick-next"></div>,
      
    };
  
  return (
    <div>
    <Header />
      <div className="third-page-content">
        <div className="third-main-content">
          <div className="big-heading-2">
            <h2>OUR</h2>
            <h3>SERVICES</h3>
          </div>

          {/* Men/Women Toggle Switch */}
          <div className="toggle-switch">
            <label
              className={`gender-button ${activeGender === 'women' ? 'active' : ''}`}
            >
              <input
                type="radio"
                checked={activeGender === 'women'}
                onChange={() => handleGenderToggle('women')}
              />
              <div className="toggle-label-content">
                <img
                  src={activeGender === 'women' ? "/upload/women-white-icon.png" : "/upload/women-black-icon.png"}
                  alt="women-icon"
                  className='gender-icon'
                />
              </div>
            </label>

            <label
              className={`gender-button ${activeGender === 'men' ? 'active' : ''}`}
            >
              <input
                type="radio"
                checked={activeGender === 'men'}
                onChange={() => handleGenderToggle('men')}
              />
              <div className="toggle-label-content">
                <img
                  src={activeGender === 'men' ? "/upload/men-white-icon.png" : "/upload/men-black-icon.png"}
                  alt="men-icon"
                  className='gender-icon'
                />
                
              </div>
            </label>

          </div>

          {/* Men/Women Toggle Switch */}
          {/* <div className="toggle-switch">
            <label 
            className={`gender-button ${activeGender === 'women' ? 'active' : ''}`}>
              <input
                type="radio"
                // name="genderToggle"
                // value="women"
                checked={activeGender === 'women'}
                onChange={() => handleGenderToggle('women')}
              />
              Women
            </label>
            <label className={`gender-button ${activeGender === 'men' ? 'active' : ''}`}>
              <input
                type="radio"
                // name="genderToggle"
                // value="men"
                checked={activeGender === 'men'}
                onChange={() => handleGenderToggle('men')}
              />
              Men
            </label>
          </div> */}

          {/* Men/Women Toggle Switch */}
          {/* <div className="toggle-switch">
            <label
              className={`gender-button ${activeGender === 'women' ? 'active' : ''}`}
              style={{ color: activeGender === 'women' ? '#CE3B3C' : 'black' }}
            >
              <input
                type="radio"
                checked={activeGender === 'women'}
                onChange={() => handleGenderToggle('women')}
              />
              Women
            </label> */}
    
            {/* Toggle Switch Icon
            <div className="toggle-icon" onClick={() => toggleGender()}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      transition: 'transform 0.3s',
                  }}
              >
                  <path d="M6 9l6 6 6-6" />
              </svg>
            </div> */}

            {/* Toggle Switch Icon */}
            {/* <div className="toggle-icon" onClick={() => toggleGender()}>
              <div className="circle"></div>
            </div>

            <label
              className={`gender-button ${activeGender === 'men' ? 'active' : ''}`}
              style={{ color: activeGender === 'men' ? '#CE3B3C' : 'black' }}
            >
              <input
                type="radio"
                checked={activeGender === 'men'}
                onChange={() => handleGenderToggle('men')}
              />
              Men
            </label>
          </div> */}

          {/* Men/Women Toggle Switch
          <div className="toggle-switch">
            <button
              className={`gender-button ${activeGender === 'women' ? 'active' : ''}`}
              onClick={() => handleGenderToggle('women')}
            >
              Women
            </button>
            <div class="toggle-switch"></div>
            <button
              className={`gender-button ${activeGender === 'men' ? 'active' : ''}`}
              onClick={() => handleGenderToggle('men')}
            >
              Men
            </button>
          </div> */}

          {/* Slider for Images */}
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`${activeGender} Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Third;
