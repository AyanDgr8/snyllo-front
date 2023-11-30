// src/components/routes/Seventh.js

import React, { useEffect } from 'react';
import './Seventh.css';

const Seventh = () => {
    useEffect(() => {
        const targets = document.querySelectorAll('.seventh-box-content-wax div');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold as needed
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInRight 2s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        targets.forEach((target) => {
            observer.observe(target);
        });

        // Cleanup observer on component unmount
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div>
            <div className='seventh-page-content'>
                <span className='big-heading-6'>
                    <h2>WHY LHR ?</h2>
                    <h3>OVER WAXING </h3>
                </span>
                <div className='seventh-box'>
                    <div className='lhr'>
                        <button className='button-lhr-waxing'>LHR</button>
                        <div className='seventh-box-content-lhr'>
                            <span>Long-lasting results or no regrowth</span>
                            <span>No discomfort to mild pricking sensation</span>
                            <span>Safe for all skin types</span>
                            <span>Requires 3-9 sessions</span>
                            <span>Cheaper & Cost-effective in long term</span>
                        </div>
                    </div>
                    <img src="https://snylloestetica.com/wp-content/uploads/2023/11/Line-639-copy-4.png" 
                    class="middle-five-icons" 
                    alt ="middle-five-icons" 
                    />
                    <div className='waxing'>
                        <button className='button-lhr-waxing'>WAXING</button>
                        <div className='seventh-box-content-wax'>
                            <span>Needs frequent sessions for lifetime</span>
                            <span>Painful, especially on sensitive areas</span>
                            <span>Risk of burns and irritation</span>
                            <span>Requires continual, unlimited sessions</span>
                            <span>Expensive due to frequent sessions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Seventh;