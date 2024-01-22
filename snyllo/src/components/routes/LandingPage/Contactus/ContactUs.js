// src/components/routes/LandingPage/ContactUs/ContactUs.js

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css';
import Header from '../Header/Header';

const ContactUs = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    bodyZone:'',
    location: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation
    if (!formData.name || !formData.phone || !formData.email || !formData.treatment || !formData.bodypart || !formData.location) {
      toast.error('Please fill in all the required fields');
      return;
    }
    // console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
    
    // Perform form submission
    // const apiUrl = 'http://localhost:3000/user-details'; https://snyllo-estetica-backend.onrender.com
    const apiUrl = 'https://snyllo-estetica-backend.onrender.com/user-details-contactus';
    // console.log('apiUrl:', apiUrl); 
    console.log('formData:', formData); 

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      console.log('Response data:', data);

      if (!response.ok || !data) {
        console.error('Error submitting form:', data);
        toast.error('Error submitting form. Please try again.');
      } else {
        console.log('Submission successful:', data);
        toast.success('Thank you!! Our team will contact you soon.');
        setSubmissionStatus('success');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again.');
    }
  };
  

  useEffect(() => {
    if (submissionStatus) {
      // Reset the form after 3 seconds
      const resetForm = setTimeout(() => {
        setSubmissionStatus(null);
        setFormData({
          name: '',
          phone: '',
          email: '',
          treatment: '',
          bodyZone:'',
          location: '',
        });
      }, 3000);
      return () => clearTimeout(resetForm);
    }
  }, [formData, submissionStatus]);

  return (
    <div>
    <Header />
      <div className='contact-form-container' id="contact-us">
        <span className="big-heading-contactus">
          <h2>GET IN TOUCH</h2>
          <h3>CONTACT US</h3>
        </span>
        <div className="container">
        <h1 className="head">Our Experts Have All The Answers For You</h1>
          <div className="form-part">
            <form id="form-section" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <select
                name="treatment"
                className='treatment'
                value={formData.treatment}
                onChange={handleChange}
              >
                <option value="" defaultValue>Select Treatment</option>
                <option value="treatment1">Laser Hair Removal</option>
              </select>

              <select
                name="bodyZone"
                value={formData.bodyZone}
                onChange={handleChange}
              >
                <option value=""  defaultValue >Select Body Part</option>
                <option value="bodyZone1">Full Body</option>
                <option value="bodyZone2">Hands</option>
                <option value="bodyZone3">Legs</option>
                <option value="bodyZone4">Face</option>
                <option value="bodyZone5">Underarms</option>
                <option value="bodyZone6">Back</option>
                <option value="bodyZone7">Chest</option>
                <option value="bodyZone8">Stomach</option>
                <option value="bodyZone9">Bikini</option>
              </select>

              <select
                name="location"
                className='location'
                value={formData.location}
                onChange={handleChange}
              >
                <option value="" defaultValue>Select Location</option>
                <option value="location1">Delhi</option>
                <option value="location2">Gurugram</option>
                <option value="location3">Noida</option>
              </select>

              <button className='formbutton'
              type="submit">Get Set Glow</button>
            </form>
            {submissionStatus && (
              <p 
              className={submissionStatus === 'success' ? 'success-message' : 'error-message'}>
                {submissionStatus === 'success' ? 'Thank you for contacting us, we will be in touch shortly!' : 'Error submitting form. Please try again.'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactUs;
