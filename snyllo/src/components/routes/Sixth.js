// src/components/routes/Sixth.js

import React from 'react';
import './Sixth.css';

const Sixth = () =>{
    return (
        <div>
            <div className="sixth-page-content">
                <span className="big-heading-5">
                    <h2>YOUR BUSY ROUTINE</h2>
                    <h3>OUR CONVENIENT SOLUTION</h3>
                </span>
                {/* Image Containers */}
                <span className="routine-row">
                    <div className="routine-logo">
                        <img src="https://snylloestetica.com/wp-content/uploads/2023/11/new-pointer-1.png" 
                        class="routine-logo-1" 
                        alt ="routine-logo-1"/>
                        <img src="https://snylloestetica.com/wp-content/uploads/2023/11/new-pointer-2.png" 
                        class="routine-logo-2" 
                        alt ="routine-logo-2"/>
                        <img src="https://snylloestetica.com/wp-content/uploads/2023/11/new-pointer-3.png" 
                        class="routine-logo-3" 
                        alt ="routine-logo-3"/>
                    </div>
                    <div className="routine-logo">
                        <img src="https://snylloestetica.com/wp-content/uploads/2023/11/new-pointer-4.png" 
                        class="routine-logo-4" 
                        alt ="routine-logo-4"/>
                        <img src="https://snylloestetica.com/wp-content/uploads/2023/11/new-pointer-6.png" 
                        class="routine-logo-5" 
                        alt ="routine-logo-5"/>
                        <img src="https://snylloestetica.com/wp-content/uploads/2023/11/new-pointer-5.png" 
                        class="routine-logo-6" 
                        alt ="routine-logo-6"/>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Sixth;