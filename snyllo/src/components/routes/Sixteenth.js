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
                            <h2>IN ADDITION, THE EFFECT LASTS UP TO 15-20 YEARS.</h2>
                        </span>
                        <span className="sixteenth-line sixteenth-line-3">
                            <h2>THE PROCEDURE DOES NOT CAUSE PAIN EVEN ON THE MOST SENSITIVE AREAS OF THE SKIN.</h2>
                        </span>
                        <span className="sixteenth-line sixteenth-line-4">
                            <h2>IN 60 MONTHS YOU SAVE UP TO 5,00,000/- WITH A SUBSCRIPTION, UNLIKE ONE-TIME VISITS.</h2>
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
        </div>
    )
}

export default Sixteenth;