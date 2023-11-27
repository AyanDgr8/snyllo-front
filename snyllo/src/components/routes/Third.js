// src/components/routes/Third.js

import React, { useState } from 'react';
import './Third.css';

const Third = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <div className="third-page-content">
        <div className="third-main-content">
          <div className="big-heading-2">
            <h2>OUR</h2>
            <h3>SERVICES</h3>
          </div>

          <div className='men-women'>
            <div className="men-women-caption">
              <img src="https://snylloestetica.com/wp-content/uploads/2023/11/womenW.png"
              class="Icon-W" 
              alt="Icon-W" 
              />
              <p>WOMEN</p>
            </div>
            <div className="men-women-caption">
              <img src="https://snylloestetica.com/wp-content/uploads/2023/11/menW-1.png"
              class="Icon-M" 
              alt="Icon-M" 
              />
              <p>MEN</p>
            </div>
          </div>

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
              {activeButton === 1 && (
                <div className="images-container">
                  {/* Images for Button 1 */}
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
              {activeButton === 2 && (
                <div className="images-container">
                  {/* Images for Button 2 */}
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
              {activeButton === 3 && (
                <div className="images-container">
                  {/* Images for Button 3 */}
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
              {activeButton === 4 && (
                <div className="images-container">
                  {/* Images for Button 4 */}
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
              {activeButton === 5 && (
                <div className="images-container">
                  {/* Images for Button 5 */}
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
              {activeButton === 6 && (
                <div className="images-container">
                  {/* Images for Button 6 */}
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
              {activeButton === 7 && (
                <div className="images-container">
                  {/* Images for Button 7 */}
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
              {activeButton === 8 && (
                <div className="images-container">
                  {/* Images for Button 8 */}
                  <img src="https://snylloestetica.com/wp-content/uploads/2023/11/chestw.png" 
                  class="button-image"
                  alt="back"
                  > 
                  </img>
                </div>
              )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
