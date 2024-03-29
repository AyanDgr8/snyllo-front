// src/components/routes/LandingPage/Twelth/Twelth.js

import React from "react";
import './Twelth.css';
import Header from '../Header/Header';

const Twelth = () => {
    return (
        <div>
        <Header />
            <div className="twelth-page-content">
                <span className='big-heading-11'>
                    <h2>OLED DISPLAY</h2>
                    <h3>OF APPLICATOR</h3>
                </span>
                <div className="twelth-container">
                    <div className="twelth-column-one">
                        <img 
                        src="/upload/twelth-left.png"
                        className="twelth-img" 
                        alt ="twelth-img" 
                        />
                    </div>
                    <div className="twelth-column-two">
                        <div className="iconn-grid">
                            <div className="iconn-column">
                                <div className="iconn-row">
                                    <div className="iconn-caption">
                                        <img src="/upload/twelth-icon-1.png" 
                                        className="twelth-icon-1" 
                                        alt="twelth-icon-1"
                                        />
                                        <p>ENERGY ADJUSTMENT</p>
                                    </div>
                                </div>
                                <div className="iconn-row">
                                    <div className="iconn-caption">
                                        <img src="/upload/twelth-icon-2.png" 
                                        className="twelth-icon-2" 
                                        alt="twelth-icon-2"
                                        />
                                        <p>FREQUENCY ADJUSTMENT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="twelth-column-three">
                        <div className="iconn-grid">
                            <div className="iconn-column">
                                <div className="iconn-row">
                                    <div className="iconn-caption">
                                        <img src="/upload/twelth-icon-3.png" 
                                        className="twelth-icon-3"
                                        alt="twelth-icon-3"
                                        />
                                        <p>PULSE WIDTH ADJUSTMENT</p>
                                    </div>
                                </div>
                                <div className="iconn-row">
                                    <div className="iconn-caption">
                                        <img src="/upload/twelth-icon-4.png" 
                                        className="twelth-icon-4" 
                                        alt="twelth-icon-4" 
                                        />
                                        <p>REAL-TIME TEMPERATURE MONITORING</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Twelth;