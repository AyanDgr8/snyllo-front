// src/components/routes/ContactUs.js

import React, { useState, useEffect } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    bodypart:'',
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
    // console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
    const apiUrl = 'https://snylloestetica-backend.onrender.com/user-details';
    // const apiUrl = 'http://localhost:3000/user-details';
    console.log('apiUrl:', apiUrl); 
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
        setSubmissionStatus('error');
      } else {
        console.log('Submission successful:', data);
        setSubmissionStatus('success');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
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
          bodypart:'',
          location: '',
        });
      }, 3000);

      return () => clearTimeout(resetForm);
    }
  }, [submissionStatus]);

  return (
    <div>
      <div className='formmm'>
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
              value={formData.treatment}
              onChange={handleChange}
            >
              <option value="" disabled selected>Select Treatment</option>
              <option value="treatment1">Treatment 1</option>
              <option value="treatment2">Treatment 2</option>
              <option value="treatment3">Treatment 3</option>
            </select>

            <select
              name="bodypart"
              value={formData.bodypart}
              onChange={handleChange}
            >
              <option value="" disabled selected>Select Body Part</option>
              <option value="bodypart1">Body Part 1</option>
              <option value="bodypart2">Body Part 2</option>
              <option value="bodypart3">Body Part 3</option>
            </select>

            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="" disabled selected>Select Location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>

            <button className='formbutton'
            type="submit">Get Set Glow</button>
          </form>
          {submissionStatus && (
            <p className={submissionStatus === 'success' ? 'success-message' : 'error-message'}>
              {submissionStatus === 'success' ? 'Your details are received!' : 'Error submitting form. Please try again.'}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};


export default ContactUs;
