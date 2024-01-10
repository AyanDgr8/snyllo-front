// src/components/routes/LandingPage/Fifth/Fifth.js

import React from 'react';
import './Fifth.css';
import Header from '../Header/Header';

const Fifth = () => {
    return (
        <div>
        <Header />
            <div className="fifth-page-content">
                    <span className="big-heading-4">
                        <h2>WE HAVE DEVELOPED</h2>
                        <h3>A UNIQUE LASER FOR HAIR REMOVAL</h3>
                    </span>

                    {/* Icon Grid */}
                    <div className="icon-grid">
                        {/* First Column */}
                        <div className="icon-column">
                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-1.png" 
                                    class="Icon-1" 
                                    alt="Icon-1"
                                    />
                                    <p>High Pulse Energy upto 2205</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-2.png" 
                                    className="Icon-2" 
                                    alt="Icon-2" 
                                    />
                                    <p>Virtual Painless</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-3.png" 
                                    className="Icon-3" 
                                    alt="Icon-3" 
                                    />
                                    <p>Intuitive, user Friendly 12.1 with Snyllo Touchscreen</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-4.png" 
                                    className="Icon-4" 
                                    alt="Icon-4" 
                                    />
                                    <p>Clinically Proven 3D Technology</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-5.png" 
                                    className="Icon-5" 
                                    alt="Icon-5" 
                                    />
                                    <p>No Consumables</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-6.png" 
                                    className="Icon-6" 
                                    alt="Icon-6"
                                    />
                                    <p>Exceptionally Large spot size 13.5*38.5mm</p>
                                </div>
                            </div>

                        </div>

                        {/* Second Column */}
                        <div className="empty-column">
                            <img src="/upload/5th-machine.PNG" 
                            className="fifth-machine"
                            alt="fifth-machine" />
                        </div>

                        {/* Third Column */}
                        <div className="icon-column">
                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-7.png" 
                                    className="Icon-7" 
                                    alt="Icon-7" 
                                    />
                                    <p>Multi-Changable Magnetic Heads</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-8.png" 
                                    className="Icon-8" 
                                    alt="Icon-8" />
                                    <p>Low Noise</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-9.png" 
                                    className="Icon-9" 
                                    alt="Icon-9" 
                                    />
                                    <p>5-Stage 360° Compact cooling Technology</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-10.png" 
                                    className="Icon-10" 
                                    alt="Icon-10" 
                                    />
                                    <p>OLED Display</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-11.png" 
                                    className="Icon-11"
                                    alt="Icon-11" 
                                    />
                                    <p>Treat All Hair Spot & Hairs</p>
                                </div>
                            </div>

                            <div className="icon-row">
                                <div className="icon-caption">
                                    <img src="/upload/Icon-12.png" 
                                    className="Icon-12" 
                                    alt="Icon-12"
                                    />
                                    <p>Unlimited Flash Shots</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Fifth;
