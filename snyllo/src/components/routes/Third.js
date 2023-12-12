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
                <img   
                src="/upload/women-body-1.png"
                class="women-body-1" 
                alt ="women-body-1" 
                />
                <img   
                src="/upload/women-body-2.png"
                class="women-body-2" 
                alt ="women-body-2" 
                />
              </div>
            )}
            {activeGender === 'women' && activeButton === 2 && (
              <div className="images-container">
                <img   
                src="/upload/women-body-1.png"
                class="women-body-1" 
                alt ="women-body-1" 
                />
                <img   
                src="/upload/women-body-2.png"
                class="women-body-2" 
                alt ="women-body-2" 
                />
              </div>
            )}
            {activeGender === 'women' && activeButton === 3 && (
              <div className="images-container">
                <img   
                src="/upload/women-hand-1.png"
                class="women-hand-1" 
                alt ="women-hand-1" 
                />
                <img   
                src="/upload/women-hand-2.png"
                class="women-hand-2" 
                alt ="women-hand-2" 
                />
                <img   
                src="/upload/women-hand-3.png"
                class="women-hand-3" 
                alt ="women-hand-3" 
                />
                <img   
                src="/upload/women-hand-4.png"
                class="women-hand-4" 
                alt ="women-hand-4" 
                />
                <img   
                src="/upload/women-hand-5.png"
                class="women-hand-5" 
                alt ="women-hand-5" 
                />
              </div>
            )}
            {activeGender === 'women' && activeButton === 4 && (
              <div className="images-container">
                <img   
                src="/upload/women-body-1.png"
                class="women-body-1" 
                alt ="women-body-1" 
                />
                <img   
                src="/upload/women-body-2.png"
                class="women-body-2" 
                alt ="women-body-2" 
                />
              </div>
            )}
            {activeGender === 'women' && activeButton === 5 && (
              <div className="images-container">
                <img   
                src="/upload/women-legs-1.png"
                class="women-legs-1" 
                alt ="women-body-1" 
                />
                <img   
                src="/upload/women-legs-2.png"
                class="women-legs-2" 
                alt ="women-legs-2" 
                />
                <img   
                src="/upload/women-legs-3.png"
                class="women-legs-3" 
                alt ="women-legs-3" 
                />
                <img   
                src="/upload/women-legs-4.png"
                class="women-legs-4" 
                alt ="women-legs-4" 
                />
                <img   
                src="/upload/women-legs-5.png"
                class="women-legs-5" 
                alt ="women-legs-5" 
                />
                <img   
                src="/upload/women-legs-6.png"
                class="women-legs-6" 
                alt ="women-legs-6" 
                />
              </div>
            )}
            {activeGender === 'women' && activeButton === 6 && (
              <div className="images-container">
                <img   
                src="/upload/women-face-1.png"
                class="women-face-1" 
                alt ="women-face-1" 
                />
                <img   
                src="/upload/women-face-2.png"
                class="women-face-2" 
                alt ="women-face-2" 
                />
                <img   
                src="/upload/women-face-3.png"
                class="women-face-3" 
                alt ="women-face-3" 
                />
                <img   
                src="/upload/women-face-4.png"
                class="women-face-4" 
                alt ="women-face-4" 
                />
                <img   
                src="/upload/women-face-5.png"
                class="women-face-5" 
                alt ="women-face-5" 
                />
                <img   
                src="/upload/women-face-6.png"
                class="women-face-6" 
                alt ="women-face-6" 
                />
              </div>
            )}
            {activeGender === 'women' && activeButton === 7 && (
              <div className="images-container">
                <img   
                src="/upload/women-chest-1.png"
                class="women-chest-1" 
                alt ="women-chest-1" 
                />
                <img   
                src="/upload/women-chest-2.png"
                class="women-chest-2" 
                alt ="women-chest-2" 
                />
                <img   
                src="/upload/women-chest-3.png"
                class="women-chest-3" 
                alt ="women-chest-3" 
                />
                <img   
                src="/upload/women-chest-4.png"
                class="women-chest-4" 
                alt ="women-chest-4" 
                />
                <img   
                src="/upload/women-chest-5.png"
                class="women-chest-5" 
                alt ="women-chest-5" 
                />
              </div>
            )}
            {activeGender === 'women' && activeButton === 8 && (
              <div className="images-container">
                <img   
                src="/upload/women-back-1.png"
                class="women-back-1" 
                alt ="women-back-1" 
                />
                <img   
                src="/upload/women-back-2.png"
                class="women-back-2" 
                alt ="women-back-2" 
                />
                <img   
                src="/upload/women-back-3.png"
                class="women-back-3" 
                alt ="women-back-3" 
                />
              </div>
            )}


            {activeGender === 'men' && activeButton === 1 && (
              <div className="images-container">
                <img   
                src="/upload/men-bikini-1.png"
                class="men-bikini-1" 
                alt ="men-bikini-1" 
                />
              </div>
            )}
            {activeGender === 'men' && activeButton === 2 && (
              <div className="images-container">
                <img   
                src="/upload/men-bikini-1.png"
                class="men-bikini-1" 
                alt ="men-bikini-1" 
                />
              </div>
            )}
            {activeGender === 'men' && activeButton === 3 && (
              <div className="images-container">
                <img   
                src="/upload/men-hand-1.png"
                class="men-hand-1" 
                alt ="men-hand-1" 
                />
                <img   
                src="/upload/men-hand-2.png"
                class="men-hand-2" 
                alt ="men-hand-2" 
                />
                <img   
                src="/upload/men-hand-3.png"
                class="men-hand-3" 
                alt ="men-hand-3" 
                />
                <img   
                src="/upload/men-hand-4.png"
                class="men-hand-4" 
                alt ="men-hand-4" 
                />
                <img   
                src="/upload/men-hand-5.png"
                class="men-hand-5" 
                alt ="men-hand-5" 
                />
                <img   
                src="/upload/men-hand-6.png"
                class="men-hand-6" 
                alt ="men-hand-6" 
                />
              </div>
            )}
            {activeGender === 'men' && activeButton === 4 && (
              <div className="images-container">
                <img   
                src="/upload/men-bikini-1.png"
                class="men-bikini-1" 
                alt ="men-bikini-1" 
                />
                <img   
                src="/upload/men-bikini-2.png"
                class="men-bikini-2" 
                alt ="men-bikini-2" 
                />
                <img   
                src="/upload/men-bikini-3.png"
                class="men-bikini-3" 
                alt ="men-bikini-3" 
                />
                <img   
                src="/upload/men-bikini-4.png"
                class="men-bikini-4" 
                alt ="men-bikini-4" 
                />
                <img   
                src="/upload/men-bikini-5.png"
                class="men-bikini-5" 
                alt ="men-bikini-5" 
                />
                <img   
                src="/upload/men-bikini-6.png"
                class="men-bikini-6" 
                alt ="men-bikini-6" 
                />
              </div>
            )}
            {activeGender === 'men' && activeButton === 5 && (
              <div className="images-container">
                <img   
                src="/upload/men-legs-1.png"
                class="men-legs-1" 
                alt ="men-legs-1" 
                />
                <img   
                src="/upload/men-legs-2.png"
                class="men-legs-2" 
                alt ="men-legs-2" 
                />
                <img   
                src="/upload/men-legs-3.png"
                class="men-legs-3" 
                alt ="men-legs-3" 
                />
                <img   
                src="/upload/men-legs-4.png"
                class="men-legs-4" 
                alt ="men-legs-4" 
                />
                <img   
                src="/upload/men-legs-5.png"
                class="men-legs-5" 
                alt ="men-legs-5" 
                />
                <img   
                src="/upload/men-legs-6.png"
                class="men-legs-6" 
                alt ="men-legs-6" 
                />
              </div>
            )}
            {activeGender === 'men' && activeButton === 7 && (
              <div className="images-container">
                <img   
                src="/upload/men-bikini-1.png"
                class="men-bikini-1" 
                alt ="men-bikini-1" 
                />
              </div>
            )}
            {activeGender === 'men' && activeButton === 8 && (
              <div className="images-container">
                <img   
                src="/upload/men-bikini-1.png"
                class="men-bikini-1" 
                alt ="men-bikini-1" 
                />
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




