// src/components/routes/Thirteenth.js


import React from "react";
import './Thirteenth.css';

const Thirteenth = () => {
    return (
        <div>
            <div className="thirteenth-page-content">
                <span className='big-heading-12'>
                    <h2>AUTOMATIC 24 POINT</h2>
                    <h3>INITIATION CHECK</h3>
                </span>

                <div className='thirteenth-container'>
                    <div className='thirteenth-left-container'>
                        <p>When the machine is turned on, an automated 24 point system
                            safety check is launched. This ensures it it in perfect working
                            order and highlights any problems to the user in advance.
                        </p>
                    </div>
                    <div className='thirteenth-right-container'>
                        <img   
                        src="/upload/thirteenth-img.png"
                        className="thirteenth-img" 
                        alt ="thirteenth-img" 
                        />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Thirteenth;