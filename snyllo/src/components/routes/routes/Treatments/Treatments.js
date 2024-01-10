// src/components/routes/Treatments/Treatments.js

import React, { useState } from 'react';
import './Treatments.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';

const Treatments = () =>{
    return (
        <div>
            <div className="video-background">
            <video autoPlay loop muted className="video">
                <source src="/upload/first-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <Header />
            <div className="treatments-page">
                <div className="first-container-treatments" >
                    <img    
                        src="/upload/testing.png" 
                        className="epilazextreatments" 
                        alt="epilazextreatments">
                    </img>
                    <span className="big-heading-treatments">
                        <h1 className='heading-treatments'>OUR TREATMENTS</h1>
                    </span>
                    <span className='firstline-treatments'>
                        <p>
                            ELIMINATE TIME-CONSUMING SHAVING ROUTINES AND SAVE ON LONG-TERM COSTS
                        </p>
                    </span>
                </div>

                <div className='container-1'>
                    <h2 className='container-1-treatments-heading-1-1'>DERMATOLOGICAL TREATMENT</h2>
                    <h3 className='container-1-treatments-heading-1-2'>WITH DIODE LASER</h3>
                    <div className='container-1-treatments'>
                        <div className='container-1-treaments-left-1'>
                            <img    
                                src="/upload/container-1-treaments-top-1-graph.png" 
                                className="container-1-treaments-top-1-graph" 
                                alt="container-1-treaments-top-1-graph">
                            </img>
                        </div>
                        <div className='container-1-treaments-right-1'>
                            <p>
                                Elevating skincare beyond traditional methods, the Epilaze-X's advanced technology, 
                                encompassing wavelengths of 755nm, 808nm, 940nm, and 1064nm, redefines the treatment 
                                of sun damage and pigmentation concerns. Unlike conventional approaches such as chemical 
                                peels, Epilaze-X employs laser and infrared technology to heat the epidermis, fostering 
                                collagen production and enhancing metabolic processes. This innovative methodology ensures 
                                enduring and impressive results, effectively correcting unwanted pigmentation. Epilaze-X 
                                dermatological treatments stand as a beacon of efficiency, enabling patients to achieve 
                                their desired aesthetic transformations with remarkable precision.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container-2'>
                
                    <h2 className='container-2-treatments-heading-1-1'>VASCULAR TREATMENT</h2>
                    <h3 className='container-2-treatments-heading-1-2'>WITH DIODE LASER</h3>
                    <div className='container-2-treatments'>
                        <div className='container-2-treaments-left-2'>
                            <p>
                                Epilaze-X, with its groundbreaking 940 nm VAS handpiece, has transformed 
                                the landscape of benign vascular lesion treatments. Common conditions like 
                                port-wine stains and spider veins, once addressed through traditional, less 
                                effective methods, now find a superior alternative in Epilaze-X's non-invasive 
                                diode laser technology. Offering precise and immediate results, this innovative 
                                approach ensures patient safety and eliminates downtime between sessions, all 
                                within a matter of minutes. Epilaze-X stands as a remarkable solution, prioritizing 
                                effectiveness and efficiency in the management of benign vascular lesions.
                            </p>
                        </div>
                        <div className='container-2-treaments-right-2'>
                            <img    
                                src="/upload/container-1-treaments-top-2-graph.png" 
                                className="container-1-treaments-top-2-graph" 
                                alt="container-1-treaments-top-2-graph">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    );

};

export default Treatments;
