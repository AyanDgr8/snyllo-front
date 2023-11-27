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
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/1box.png" 
                        class="ninth-column-one-img" 
                        alt ="ninth-column-one-img" 
                        />
                        <img 
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/3box.png" 
                        class="ninth-column-one-img" 
                        alt ="ninth-column-one-img" 
                        />
                    </div>

                    <div className='ninth-column-two'>
                        <img  
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/Mobile-Final-1.png" 
                        class="ninth-column-two-img" 
                        alt = "ninth-column-two-img"
                        />
                    </div>

                    <div className='ninth-column-three'>
                        <img 
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/2box.png" 
                        class="ninth-column-three-img" 
                        alt ="ninth-column-three-img" 
                        />
                        <img 
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/4box.png" 
                        class="ninth-column-three-img" 
                        alt="ninth-column-three-img"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Ninth;