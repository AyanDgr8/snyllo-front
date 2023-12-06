// src/components/routes/Ninth.js


import React from 'react';
import './Ninth.css';

const Ninth = () => {
    return (
        <div>
            <div className='ninth-page-content'>
                <span className='big-heading-8'>
                    <h2>HOW DOES SNYLLO</h2>
                    <h3>ESTETICA WORK?</h3>
                </span>

                <div className="ninth-container">
                    <div className='ninth-column-one'>
                        <img 
                        src="/upload/ninth-column-one-1.png" 
                        class="ninth-column-one-1" 
                        alt ="ninth-column-one-1" 
                        />
                        <img 
                        src="/upload/ninth-column-one-2.png" 
                        class="ninth-column-one-2" 
                        alt ="ninth-column-one-2" 
                        />
                    </div>

                    <div className='ninth-column-two'>
                        <img  
                        src="/upload/ninth-column-two.png" 
                        class="ninth-column-two" 
                        alt = "ninth-column-two"
                        />
                    </div>

                    <div className='ninth-column-three'>
                        <img 
                        src="/upload/ninth-column-two-1.png" 
                        class="ninth-column-three-1" 
                        alt ="ninth-column-three-1" 
                        />
                        <img 
                        src="/upload/ninth-column-two-2.png" 
                        class="ninth-column-three-2" 
                        alt="ninth-column-three-2"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Ninth;