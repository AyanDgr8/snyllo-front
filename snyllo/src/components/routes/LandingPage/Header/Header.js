// src/components/routes/LandingPage/Header/Header.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUpperLine, setShowUpperLine] = useState(true);



  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  useEffect(() => {
    console.log('showMenu state:', showMenu);

    const closeMenuOnResize = () => {
      if (window.innerWidth > 320 && showMenu) {
        setShowMenu(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 60) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Toggle the upper line based on the showMenu state
    setShowUpperLine(true);

    // Attach event listener for window resize

    window.addEventListener('resize', closeMenuOnResize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMenu]);

  return (
    <div>
      {showUpperLine && 
        <div className={`upper-line-header ${scrolled ? 'hide' : ''}`} >
          <Link to="/form-LHR"  className="offer-link">
            <h3 className='offer-line' >
              Get Full Body LIFETIME HAIRLESS Guarantee @ just ₹7999/- 
              <strong className='book-now-link'>BOOK NOW </strong>
            </h3>
          </Link>
        </div>
      }
      
      {/* Default Header */}
      <header className={`default-header ${scrolled ? 'hide' : ''}`}>
        <div className="logo-header-hamburger">
          <Link to="/" className="logo-link">
            <img
              src="/upload/snyllo-logo.png"
              alt="snyllo-logo-hamburger"
              className='snyllo-logo-hamburger'
            />
          </Link>
          <div className="default-hamburger-menu" onClick={toggleMenu}>
            ☰
          </div>
          {showMenu && (
            <div className="mobile-menu active">
              <Link to="/benefits" className="button"  >Benefits of LHR</Link> 
              <Link to="/products" className="button"  >Products</Link> 
              <Link to="/treatments" className="button"  >Treatments</Link> 
              <Link to="/technology" className="button"  >Technology</Link>  
              <Link to="/services" className="button prices"  >Prices & Services</Link>  
              <button onClick={() => window.open('https://alienotion.live/?page_id=32', '_blank')} className='button contact'>
                <img 
                  src="/upload/talk-to-us.png" 
                  className="icon-talk" 
                />
              </button>
            </div>
          )}
        </div>
      </header>


      {/* Scrolled Header */}

      <header className={`header ${scrolled ? '' : 'hide'}`}>
        <div className="header-container">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img 
                src="/upload/snyllo-logo.png" 
                alt="snyllo-logo" 
                className='snyllo-logo' 
              />
            </Link>
          </div>
          <div className="buttons">
            <Link to="/benefits" className="button benefits"  >Benefits of LHR</Link> 
            <Link to="/products" className="button"  >Products</Link> 
            <Link to="/treatments" className="button"  >Treatments</Link>
            <Link to="/technology" className="button">Technology</Link> 
            <Link to="/services" className="button prices">Prices & Services</Link>    
            <button onClick={() => window.open('https://alienotion.live/?page_id=32')} className='button contact'>
              <img 
                src="/upload/talk-to-us.png" 
                className="icon-talk" 
              />
            </button>
          </div>

          {/* Hamburger menu */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            ☰
          </div>

          {/* Mobile menu */}
          {showMenu && (
            <div className="mobile-menu active">
            <Link to="/benefits" className="button benefits"  >Benefits of LHR</Link> 
            <Link to="/products" className="button"  >Products</Link> 
            <Link to="/treatments" className="button" >Treatments</Link> 
            <Link to="/technology" className="button">Technology</Link> 
            <Link to="/services" className="button prices">Prices & Services</Link>   
            <button onClick={() => window.open('https://alienotion.live/?page_id=32')} className='buttonn contact'>
              <img 
                src="/upload/talk-to-us.png" 
                className="icon-talk" 
              />
            </button>
            
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

