// src/components/routes/LandingPage/Footer/Footer.js

import  React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () =>{
    return (
        <div>
            <div className='footer-content'>
                <span className='footer-container'>
                    
                    <div className='footer-column-one'>
                        <img 
                        src="/upload/footer-column-image-1.png"
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
                            <a href="https://www.facebook.com/people/Snyllo-%C3%89stetica-Premium-Laser-Hair-Reduction-at-HOME/61553207344302/?mibextid=LQQJ4d"  target="_blank" >
                                <img 
                                src="/upload/icon-facebook.png"
                                className="icon-two footer-icons"
                                alt="facebook"
                                />
                            </a>
                            <a href="https://www.youtube.com/"  target="_blank" >
                                <img 
                                src="/upload/icon-youtube.png"
                                className="icon-three footer-icons"
                                alt="youtube"
                                />
                            </a>
                            <a href="https://www.xing.com/en"  target="_blank" >
                                <img 
                                src="/upload/icon-xing.png"
                                className="icon-four footer-icons"
                                alt="xing"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/snyllo-%C3%A9stetica/mycompany/"  target="_blank" >
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
                                src="/upload/footer-column-image-2.png"
                                className="icon-six footer-icons"
                                alt="address"
                            />
                        </div>
                    </div>


                    <div className='footer-column-three'>
                        <h3>PAGES</h3>

                        <a href=" "  className='linkis'>
                            <Link to="/" className="button" target="_blank" >Home</Link>
                        </a>

                        <a href=" " className='linkis'>
                            <Link to="/products" className="button" target="_blank" >Products</Link> 
                        </a>

                        <a href=" "  className='linkis'>
                            <Link to="/benefits" className="button benefits" target="_blank" >Benefits Of LHR</Link>
                        </a>

                        <a href=" "  className='linkis'>
                            <Link to="/technology" className="button" target="_blank">Technology</Link> 
                        </a>

                        <a href=" "  className='linkis'>
                            <Link to="/treatments" className="button" target="_blank" >Treatments</Link>
                        </a>

                        <a href=" " className='linkis'>  
                            <Link to="/services" className="button prices" target="_blank" >Prices & Services</Link>
                        </a>

                    </div>


                    <div className='footer-column-four'>
                        <h3>OTHER LINKS</h3>
                        <a href=" " target='_blank' className='linkis'> 
                            <Link to="/services" className="button prices" target="_blank" >Refund Policy</Link>
                        </a>
                        <a href=" " target='_blank' className='linkis'>  
                            <Link to="/services" className="button prices" target="_blank" >Terms & Conditions</Link>
                        </a>
                        <a href=" " target='_blank' className='linkis'>  
                            <Link to="/services" className="button prices" target="_blank" >Privacy Policy</Link>
                        </a>
                    </div>


                    <div className='footer-column-five'>
                        <h3>COMING SOON</h3>
                        <div className="footer-icon-row">
                            <img 
                                src="/upload/footer-column-image-5.png"
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