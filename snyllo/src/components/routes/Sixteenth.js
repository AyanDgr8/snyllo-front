// src/components/routes/Sixteenth.js

import React from "react";
import './Sixteenth.css';

const Sixteenth = () => {
    return (
        <div>
            <div className="sixteenth-page-content">
                <span className='big-heading-15'>
                    <h2>SEE WHAT THE RESULT </h2>
                    <h3>WILL BE IN 12 MONTHS</h3>
                </span>
                <div className="sixteenth-container">
                    <div className="sixteenth-left-container">
                        <span className="sixteenth-line sixteenth-line-2">
                            <h2>In additon, the effect lasts up to 15-20 years.</h2>
                        </span>
                        <span className="sixteenth-line sixteenth-line-3">
                            <h2>The procedure does not cause pain even on the most sensitive areas of the skin.</h2>
                        </span>
                        <span className="sixteenth-line sixteenth-line-4">
                            <h2>In 60 months you save up to 5,00,000/- with a subscription, unlike one-time visits.</h2>
                        </span>
                    </div>
                    <div className="sixteenth-right-container">
                        <img 
                            src="/upload/half-hairy-half-clear.jpg"
                            className="sixteenth-img"
                            alt ="sixteenth-img"
                        />    
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Sixteenth;