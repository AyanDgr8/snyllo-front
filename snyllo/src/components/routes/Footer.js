// src/components/routes/Footer.js

import  React from 'react';
import './Footer.css';

const Footer = () =>{
    return (
        <div>
            <div className='footer-content'>
                <span className='footer-container'>
                    
                    <div className='footer-column-one'>
                        <img 
                        src="/upload/snyllo-red.png"
                        className="footer-column-image-1"
                        alt="snyllo-red"
                        />
                        <span className='footer-column-1-icons'>
                            <a href="https://www.instagram.com/snylloestetica/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
                                <img 
                                src="/upload/icon-instagram.png"
                                className="icon-one footer-icons"
                                alt="instagram"
                                />
                            </a>
                            <a href="https://www.facebook.com/people/Snyllo-%C3%89stetica-Premium-Laser-Hair-Reduction-at-HOME/61553207344302/?mibextid=LQQJ4d">
                                <img 
                                src="/upload/icon-facebook.png"
                                className="icon-two footer-icons"
                                alt="facebook"
                                />
                            </a>
                            <a href="https://www.youtube.com/">
                                <img 
                                src="/upload/icon-youtube.png"
                                className="icon-three footer-icons"
                                alt="youtube"
                                />
                            </a>
                            <a href="https://www.xing.com/en">
                                <img 
                                src="/upload/icon-xing.png"
                                className="icon-four footer-icons"
                                alt="xing"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/snyllo-%C3%A9stetica/mycompany/">
                                <img 
                                src="/upload/icon-linkedin.png"
                                className="icon-five footer-icons"
                                alt="linkedin"
                                />
                            </a>
                        </span>
                    </div>
                    <div className='footer-column-two'>
                        <h3>ADDRESS</h3>
                        <div className="footer-icon-row">
                            <img 
                                src="/upload/address.png"
                                className="icon-six footer-icons"
                                alt="address"
                            />
                        </div>
                        <div className="footer-icon-row">
                            <img 
                                src="/upload/call.png"
                                className="icon-seven footer-icons"
                                alt="phone"
                            />
                        </div>
                        <div className="footer-icon-row">
                            <img 
                                src="/upload/mail.png"
                                class="icon-eight footer-icons"
                                alt="email"
                            />
                        </div>
                    </div>
                    <div className='footer-column-three'>
                        <h3>PAGES</h3>
                        <a href=" " target='_blank' className='linkis'>Home</a>
                        <a href=" " target='_blank' className='linkis'>Products</a>
                        <a href=" " target='_blank' className='linkis'>Benefits Of LHR</a>
                        <a href=" " target='_blank' className='linkis'>Technology</a>
                        <a href=" " target='_blank' className='linkis'>Treatments</a>
                        <a href=" " target='_blank' className='linkis'>Prices & Services</a>
                    </div>
                    <div className='footer-column-four'>
                        <h3>OTHER LINKS</h3>
                        <a href=" " target='_blank' className='linkis'>Refund Policy</a>
                        <a href=" " target='_blank' className='linkis'>Terms & Conditons</a>
                        <a href=" " target='_blank' className='linkis'>Privacy Policy</a>
                    </div>
                    <div className='footer-column-five'>
                        <h3>COMING SOON</h3>
                        <div className="footer-icon-row">
                            <img 
                                src="/upload/google-play.png"
                                className="icon-nine footer-icons"
                                alt="google-play"
                            />
                        </div>
                        <div className="footer-icon-row">
                            <img 
                                src="/upload/app-store.png"
                                className="icon-ten footer-icons"
                                alt="app-store"
                            />
                        </div>
                    </div>

                </span>
                    
            </div>
        </div>
    )
}

export default Footer;