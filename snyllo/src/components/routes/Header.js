// src/components/routes/Header.js

import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Close mobile menu when switching to larger screens
    const closeMenuOnResize = () => {
      if (window.innerWidth > 600 && showMenu) {
        setShowMenu(false);
      }
    };

    // Attach event listener for window resize
    window.addEventListener('resize', closeMenuOnResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, [showMenu]); // Include showMenu in the dependency array

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            {/* Your logo code */}
            <img src="https://snylloestetica.com/wp-content/uploads/2023/11/SynlloEsteticaHorizontalLogoTransparent01.png" 
            alt="Snyllo Estetica">
            </img>
          </div>
          <div className="buttons">
              <button onClick={() => window.open('https://alienotion.live/?page_id=5425', '_blank')} className="button">Benefits of LHR</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=5407', '_blank')} className="button">Products</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=5421', '_blank')} className="button">Treatments</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=5410', '_blank')} className="button">Technology</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=32', '_blank')} className="button">Prices & Services</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=32', '_blank')} className='button contact'>Talk to Us</button>
            </div>
          {/* Hamburger menu for mobile */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            ☰
          </div>
          {/* Mobile menu */}
          {showMenu && (
            <div className="mobile-menu active">
              <button onClick={() => window.open('https://alienotion.live/?page_id=5425', '_blank')} className="button">Benefits of LHR</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=5407', '_blank')} className="button">Products</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=5421', '_blank')} className="button">Treatments</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=5410', '_blank')} className="button">Technology</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=32', '_blank')} className="button">Prices & Services</button>
              <button onClick={() => window.open('https://alienotion.live/?page_id=32', '_blank')} className='button contact'>Talk to Us</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

