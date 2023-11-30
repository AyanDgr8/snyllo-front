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
                        src="https://snylloestetica.com/wp-content/uploads/2023/11/cropped-snyllo-logo-with-red-1.png"
                        class="footer-column-image-1"
                        alt="snyllo-red"
                        />
                        <span className='footer-column-1-icons'>
                            <a href="https://www.instagram.com/snylloestetica/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
                                <img 
                                src="/upload/icon-instagram.png"
                                class="icon-one footer-icons"
                                alt="instagram"
                                />
                            </a>
                            <a href="https://www.facebook.com/people/Snyllo-%C3%89stetica-Premium-Laser-Hair-Reduction-at-HOME/61553207344302/?mibextid=LQQJ4d">
                                <img 
                                src="/upload/icon-facebook.png"
                                class="icon-two footer-icons"
                                alt="facebook"
                                />
                                
                            </a>
                            <a href="https://www.youtube.com/">
                                <img 
                                src="/upload/icon-youtube.png"
                                class="icon-three footer-icons"
                                alt="youtube"
                                />

                            </a>
                            <a href="https://www.xing.com/en">
                                <img 
                                src="/upload/icon-xing.png"
                                class="icon-four footer-icons"
                                alt="xing"
                                />

                            </a>
                            <a href="https://www.linkedin.com/company/snyllo-%C3%A9stetica/mycompany/">
                                <img 
                                src="/upload/icon-youtube.png"
                                class="icon-five footer-icons"
                                alt="linkedin"
                                />

                            </a>
                        </span>
                    </div>
                    <div className='footer-column-two'>
                        <h3>ADDRESS</h3>
                        <span className="footer-icon-row-1">
                            <div className="footer-icon-caption-1">
                                <img 
                                src="/upload/icon-address.png"
                                class="icon-six footer-icons"
                                alt="address"
                                />
                                <p>4th Floor, BPTP Centra One, Golf Course Ext Rd,
                                Sector 61, Gurugram, Haryana -122011</p>
                            </div>
                        </span>
                        <div className="footer-icon-row">
                            <div className="footer-icon-caption-2">
                                <img 
                                src="/upload/icon-phone.png"
                                class="icon-seven footer-icons"
                                alt="phone"
                                />
                                <p>+91-98009-96009 <br></br>+91-91008-96008</p>
                            </div>
                        </div>
                        <div className="footer-icon-row">
                            <div className="footer-icon-caption-3">
                                <img 
                                src="/upload/icon-email.png"
                                class="icon-eight footer-icons"
                                alt="email"
                                />
                                <p>hello@snylloestetica.com</p>
                            </div>
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
                            <div className="footer-icon-caption footer-icon-caption-5">
                                <img 
                                src="/upload/icon-google-play.png"
                                class="icon-nine footer-icons"
                                alt="google-play"
                                />
                                <p>Google Play</p>
                            </div>
                        </div>
                        <div className="footer-icon-row">
                            <div className="footer-icon-caption footer-icon-caption-5">
                                <img 
                                src="/upload/icon-app-store.png"
                                class="icon-ten footer-icons"
                                alt="app-store"
                                />
                                <p>App Store</p>
                            </div>
                        </div>
                    </div>

                </span>
                    
            </div>
        </div>
    )
}

export default Footer;