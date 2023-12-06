// src/components/routes/Third.js

import React, { useState } from 'react';
import './Third.css';

const Third = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeGender, setActiveGender] = useState('women');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleGenderButtonClick = (gender) => {
    setActiveGender(gender);
    setActiveButton(null); // Reset active button when gender changes
  };

  return (
    <div>
      <div className="third-page-content">
        <div className="third-main-content">
          <div className="big-heading-2">
            <h2>OUR</h2>
            <h3>SERVICES</h3>
          </div>

          {/* Men/Women Buttons */}
          <div className="men-women-buttons">
            <button
              className={`gender-button ${activeGender === 'women' ? 'active' : ''}`}
              onClick={() => handleGenderButtonClick('women')}
            >
              Women
            </button>
            <button
              className={`gender-button ${activeGender === 'men' ? 'active' : ''}`}
              onClick={() => handleGenderButtonClick('men')}
            >
              Men
            </button>
          </div>

          {/* Men/Women Icons
          <div className='men-women'>
            <div className="men-women-caption">
              <img
                src={isWomenSelected ? "https://snylloestetica.com/wp-content/uploads/2023/11/womenW.png" : "https://snylloestetica.com/wp-content/uploads/2023/11/menW-1.png"}
                className="Icon-W"
                alt={isWomenSelected ? "Icon-Women" : "Icon-Men"}
              />
              <p>{isWomenSelected ? 'WOMEN' : 'MEN'}</p>
            </div>
          </div> */}

          {/* Buttons */}
          <div className="buttonsss-container">
            <div className="buttonsss">
                <button
                className={`service-button wholebody ${activeButton === 1 ? 'active' : ''}`}
                onClick={() => handleButtonClick(1)}
                >
                WHOLE BODY
                </button>
                <button
                className={`service-button ${activeButton === 2 ? 'active' : ''}`}
                onClick={() => handleButtonClick(2)}
                >
                POPULAR
                </button>
                <button
                className={`service-button ${activeButton === 3 ? 'active' : ''}`}
                onClick={() => handleButtonClick(3)}
                >
                HANDS
                </button>
                <button
                className={`service-button ${activeButton === 4 ? 'active' : ''}`}
                onClick={() => handleButtonClick(4)}
                >
                BIKINI
                </button>
                <button
                className={`service-button ${activeButton === 5 ? 'active' : ''}`}
                onClick={() => handleButtonClick(5)}
                >
                LEGS
                </button>
                <button
                className={`service-button ${activeButton === 6 ? 'active' : ''}`}
                onClick={() => handleButtonClick(6)}
                >
                FACE
                </button>
                <button
                className={`service-button ${activeButton === 7 ? 'active' : ''}`}
                onClick={() => handleButtonClick(7)}
                >
                CHEST & STOMACH
                </button>
                <button
                className={`service-button ${activeButton === 8 ? 'active' : ''}`}
                onClick={() => handleButtonClick(8)}
                >
                BACK
                </button>
            </div>
            

            {/* Images */}
            {activeGender === 'women' && activeButton === 1 && (
              <div className="images-container">
                {/* Images for Women Button 1 */}
                {/* ... rest of your women images ... */}
              </div>
            )}

            {activeGender === 'men' && activeButton === 1 && (
              <div className="images-container">
                {/* Images for Men Button 1 */}
                {/* ... rest of your men images ... */}
              </div>
            )}
              
              {/* {activeButton === 2 && (
                <div className="images-container">
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
              {activeButton === 3 && (
                <div className="images-container">
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )} */}
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;




