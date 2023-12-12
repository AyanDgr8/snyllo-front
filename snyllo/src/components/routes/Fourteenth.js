// src/components/routes/Fourteenth.js

import React from "react";
import './Fourteenth.css'

const Fourteenth = () => {
    return (
        <div>
            <div className="fourteenth-page-content">
                <span className='big-heading-13'>
                    <h2>APPLICATOR</h2>
                    <h3>SITUATION MONITOR</h3>
                </span>
            </div>
            <div className="fourteenth-container">
                <div className="fourteenth-row1">
                    <p>Our intelligent system senses when the applicator is placed back in its holder and laser use is disabled in this 
                        position, making it impossible for accidental shots to be fired. The cooling system also automatically shuts 
                        off. These special features ensure that Snyllo Epilaze -X is both safe and environmentally friendly.
                    </p>
                </div>
                <div className="fourteenth-row2">
                    <span className="fourteenth-column-one">
                        <div className="iconnn-grid">
                            <div className="iconnn-column">
                                <div className="iconnn-row">
                                    <div className="iconnn-caption">
                                        <img 
                                        src="/upload/fourteenth-icon-1.png" 
                                        className="fourteenth-icons" 
                                        alt="fourteenth-icon-1"
                                        />
                                        <p>Internal Safety Monitoring</p>
                                    </div>
                                </div>
                                <div className="iconnn-row">
                                    <div className="iconnn-caption">
                                        <img 
                                        src="/upload/fourteenth-icon-2.png" 
                                        className="fourteenth-icons" 
                                        alt="fourteenth-icon-2"
                                        />
                                        <p>Secure and Energy-Saving</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span className="fourteenth-column-two">
                    <img 
                    src='/upload/eigth-right-machine.png' 
                    className="fourteenth-img"
                    alt="fourteenth"/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Fourteenth;