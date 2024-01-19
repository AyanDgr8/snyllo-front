// src/components/routes/Services/Services.js


import React, { useState }  from 'react';
import './Services.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';

const Services = () =>{
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
                <div className="video-background">
                <video autoPlay loop muted className="video">
                    <source src="/upload/first-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
                <Header />
                <div className="services-page">
                    <div className="first-container-services" >
                        <img    
                            src="/upload/testing.png" 
                            className="epilazexservices" 
                            alt="epilazexservices">
                        </img>
                        <span className="big-heading-servicess">
                            <h1 className='heading-services'>OUR SERVICES</h1>
                        </span>
                        <span className='firstline-services'>
                            <p>
                                BID FAREWELL TO PAINFUL WAXING SESSIONS AND WELCOME THE GENTLE GLOW OF LASER HAIR REMOVAL
                            </p>
                        </span>
                    </div>
                </div>
                <div className="services-main-content">

                    <div className="big-heading-services">
                        {/* <h2>OUR</h2>
                        <h3>SERVICES</h3> */}
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

                        {/* Slider for Images */}
                        <Slider {...sliderSettings}>
                            {images.map((image, index) => (
                            <div key={index} className="slide">
                                <img src={image} alt={`${activeGender} Image ${index + 1}`} />
                            </div>
                            ))}
                        </Slider>
                    </div>
                    <Footer />
                </div>
        );
    };

export default Services;