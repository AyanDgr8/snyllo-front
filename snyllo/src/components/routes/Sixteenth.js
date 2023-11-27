// src/components/routes/Sixteenth.js

import React from "react";
import './Sixteenth.css';

const Sixteenth = () => {
    return (
        <div>
            <div className="sixteenth-page-content">
                <div className="sixteenth-left-container">
                    <span className="sixteenth-line sixteenth-line-1">
                        <h2>SEE WHAT THE RESULT WILL BE THERE IN 12 MONTHS</h2>
                    </span>
                    <span className="sixteenth-line sixteenth-line-2">
                        <h2>In addition, the effect lasts up to 15-20 years.</h2>
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
                        class="sixteenth-img"
                        alt ="sixteenth-img"
                    />    
                </div>
            </div>
        </div>
    )
}

export default Sixteenth;