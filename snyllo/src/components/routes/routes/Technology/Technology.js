// src/components/routes/Technology/Technology.js


import React from 'react';
import './Technology.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import Fifth from '../LandingPage/Fifth/Fifth';
import Twelth from "../LandingPage/Twelth/Twelth";

const Technology = () => {
    return (
        <div>
            <div className="video-background">
            <video autoPlay loop muted className="video">
                <source src="/upload/first-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <Header />
            <div className="technology-page">
                <div className="first-container-technology" >
                    <img    
                        src="/upload/testing.png" 
                        className="epilazextechnology" 
                        alt="epilazextechnology">
                    </img>
                    <span className="big-heading-technology">
                        <h1 className='heading-technology'>OUR TECHNOLOGY</h1>
                    </span>
                    <span className='firstline-technology'>
                        <p>
                            DELHI-NCR's FIRST QUAD-WAVELENGTH DIODE LASER HAIR REMOVAL MACHINE
                        </p>
                    </span>
                </div>


                {/* ************************ */}
                
                
                <h2 className='technology-container-1-heading-1-1'>MAGNETIC MULTI-CHANGABLE </h2>
                <h3 className='technology-container-1-heading-1-2'>STRONG & SAFE HEADS</h3>

                <div className='technology-container-1'>
                    <div className='technology-container-100'>
                        <div className='technology-container-1-left-1'>
                            <p className='technology-container-1-para'>
                            Elevate your experience with Magnetic Multi-Changable Heads – a fusion of strength and safety. 
                            These innovative heads effortlessly adapt to your needs, ensuring swift interchangeability with 
                            magnetic precision. Engineered for robust performance, they prioritize safety, delivering a secure 
                            and reliable operation. Embrace convenience and durability with this cutting-edge technology where 
                            strength meets safety for a transformative experience.
                            </p>
                        </div>
                        <div className='technology-container-1-right-1'>
                            <img    
                                src='/upload/handpieces.png'
                                className="technology-container-1-handpieces" 
                                alt="technology-container-1-handpieces">
                            </img>
                        </div>
                    </div>
                </div>

                {/******************/}
                <h2 className='technology-container-2-heading-1-1'>COOLING TECHNOLOGY </h2>
                <h3 className='technology-container-2-heading-1-2'>WITH WATERPROOF ASSISTANCE</h3>

                <div className='technology-container-2'>
                    <div className='technology-container-200'>
                        <div className='technology-container-2-left-1'>
                            <img    
                                src='/upload/cooling.png'
                                className="technology-container-2-cooling" 
                                alt="technology-container-2-cooling">
                            </img>
                        </div>
                        <div className='technology-container-2-right-1'>
                            <p className='technology-container-2-para'>
                            Experience the future of comfort with our cutting-edge Cooling Technology, enhanced by 
                            waterproof assistance. Our handpieces redefine coolness with 360° contact cooling, 
                            delivering strong and painless treatments. Powered by robust TEC cooling technology, 
                            bid farewell to treatment discomfort and usher in a new era of patient-centric care. 
                            Elevate your treatments, ensuring not just comfort, but superior results for a truly 
                            transformative experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ****************************** */}
                
        
                <Fifth />

                <Twelth />

                {/* ****************************** */}
                        
                <h2 className='technology-container-3-heading'>COMPARATIVE ANALYSIS OF LASER WAVELENGTHS IN HAIR REMOVAL</h2>
                <h3 className='technology-container-3-heading-1'>
                    Discover the freedom of flawless skin with our Portable 
                    <strong className='bold-text'> 1200W Quad-Wavelength </strong> Diode Laser Hair Removal Machine. 
                    Beauty has never been so portable!
                </h3>
                <div className='technology-container-3'>
                <span className='technology-container-3-left'>
                    <img    
                    src='/upload/technology-container-3-roots.png'
                    className="technology-container-3-roots" 
                    alt="technology-container-3-roots">
                    </img>
                </span>
                <span className='technology-container-3-right'>
                    <p className='technology-container-3-right-1'>LASER HAIR REMOVAL technology utilizes different wavelengths, each tailored to specific characteristics of hair and skin:</p>
                    <p className='technology-container-3-right-1-2'>The <strong className='bold-text'>755nm</strong> wavelength stands out with its maximum melanin absorption and shallow skin penetration, making it particularly effective for thin or light hair and hair with less deep root structures.</p>
                    <p className='technology-container-3-right-1-2'>Moving to the classic <strong className='bold-text'>808nm</strong> wavelength, it offers medium melanin absorption and deeper skin penetration, making it ideal for most regular thickness hair with an average root depth and color. </p>
                    <p className='technology-container-3-right-1-2'>The <strong className='bold-text'>940nm</strong> wavelength exhibits moderate melanin absorption and increased penetration, making it a suitable choice for dark hair with somewhat shallow roots.</p>
                    <p className='technology-container-3-right-1-2'>Lastly, the <strong className='bold-text'>1064nm</strong> wavelength, with its lower melanin absorption and deepest penetration, proves to be ideal for all types of dark hair deeply rooted in areas like the back, scalp, and armpits.</p>
                </span>
                </div>
            </div>
        <Footer />
        </div>
    );
};

export default Technology;