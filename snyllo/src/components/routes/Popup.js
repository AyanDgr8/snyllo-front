// // src/components/routes/Popup.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Popup.css';

const Popup = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(popupTimeout);
  }, []);

  const handlePopupClick = () => {
    // Navigate to another page when the popup is clicked
    navigate.push('/another-page');
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Your content for Second.js */}
      <div className="popup-content">
        {/* Popup */}
        {showPopup && (
          <div className="popup" onClick={handlePopupClick}>
            <span className="close-button" onClick={handleCloseClick}>
              &times;
            </span>
            <p>Swipe to win your 1st Full Body LHR for FREE!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
