// src/components/routes/Products/Products.js

import React from 'react';
import './Products.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import Second from '../LandingPage/Second/Second';

const Products = () => {
  return (
    <div>
    <div className="video-background">
      <video autoPlay loop muted className="video">
        <source src="/upload/first-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <Header />
      <div className="products-page">
        <div className="first-container-products" >
          <img    
            src="/upload/testing.png" 
            className="epilazexproducts" 
            alt="epilazexproducts">
          </img>
          <span className="big-heading-products">
            <h1 className='heading-products'>OUR PRODUCTS</h1>
          </span>
          <span className='firstline-products'>
            <p>
                THE ULTIMATE DIODE LASER HAIR REMOVAL SYSTEM FOR ALL SKIN TYPES 
            </p>
          </span>
        </div>
        <h2 className='products-container-1-heading1'>SNYLLO EPILAZE-X</h2>
        <div className='products-container-1'>
          <span className='products-container-1-left'>
            <img    
              src='/upload/5th-machine.png'
              className="products-container-1-machine-curve" 
              alt="products-container-1-machine-curve">
            </img>
          </span>
          <span className='products-container-1-right'>
            <p className='products-container-1-para'>
              Snyllo's Epilaze-X is transforming laser hair removal and aesthetic 
              procedures, blending Japanese precision with German innovation. With 
              a sleek design and breakthroughs in cooling, display, handpieces, 
              footswitch, and treatment capabilities, Snyllo sets a new standard in user experience. 
              Experience the future of aesthetics with Epilaze-X – where cutting-edge meets excitement!
            </p>
          </span>
        </div>

        {/* ************** */}

        <h2 className='products-container-2-heading-1-1'>MACHINE</h2>
        <h3 className='products-container-2-heading-1-2'>INSIGHT</h3>
        <div className='products-container-2'>
          <span className='products-container-2-images'>
            <h3 className='products-container-2-headings'>Front View</h3>
            <img    
                src="/upload/products-container-2-epilazex-front.png" 
                className="products-container-2-epilazex-front epilazex-image" 
                alt="products-container-2-epilazex-front">
            </img>
          </span>
          <span className='products-container-2-images'>
            <h3 className='products-container-2-headings'>Back View</h3>
            <img    
                src="/upload/products-container-2-epilazex-back.png" 
                className="products-container-2-epilazex-back epilazex-image" 
                alt="products-container-2-epilazex-back">
            </img>
          </span>
          <span className='products-container-2-images'>
            <h3 className='products-container-2-headings'>Side View</h3>
            <img    
                src="/upload/products-container-2-epilazex-side.png" 
                className="products-container-2-epilazex-side epilazex-image" 
                alt="products-container-2-epilazex-side">
            </img>
          </span>
        </div>
        
        <Second />
        
        {/* ************************ */}
        
        <h2 className='products-container-4-heading'>SNYLLO EPILAZE</h2>
        <div className='products-container-4'>
          <span className='products-container-4-left'>
            <p className='products-container-4-para'>
              Elevate your expectations and embrace the future of laser technology with our 
              Japanese-German laser bars, where quality, power, and reliability converge into 
              a single, unmatched solution.
            </p>
          </span>
          <span className='products-container-4-right'>
            <img    
              src='/upload/eigth-right-machine.png'
              className="products-container-4-epilaze" 
              alt="products-container-4-epilaze">
            </img>
          </span>
        </div>
        
        <h2 className='products-container-5-heading-1-1'>MACHINE</h2>
        <h3 className='products-container-5-heading-1-2'>INSIGHT</h3>
        <div className='products-container-5'>
          <span className='products-container-5-images'>
            <h3 className='products-container-5-headings'>Front View</h3>
            <img    
                src="/upload/products-container-5-epilaze-front.png" 
                className="products-container-5-epilaze-front epilaze-image" 
                alt="products-container-5-epilaze-front">
            </img>
          </span>
          <span className='products-container-5-images'>
            <h3 className='products-container-5-headings'>Back View</h3>
            <img    
                src="/upload/products-container-5-epilaze-back.png" 
                className="products-container-5-epilaze-back epilaze-image" 
                alt="products-container-5-epilaze-back">
            </img>
          </span>
          <span className='products-container-5-images'>
            <h3 className='products-container-5-headings'>Probe Screen View</h3>
            <img    
                src="/upload/products-container-5-epilaze-probe.png" 
                className="products-container-5-epilaze-probe epilaze-image" 
                alt="products-container-5-epilaze-probe">
            </img>
          </span>
        </div>

    </div>
    
    <Footer />
  </div>
  );
};

export default Products;
