// src/components/routes/BookForm/BookForm.js


import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BookForm.css';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';

const BookForm = ({ onClose }) => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [bookFormData, setbookFormData] = useState({
    name: '',
    phone: '',
    email:'',
    bodyZone:'',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setbookFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation
    if (!bookFormData.name || !bookFormData.phone || !bookFormData.email || !bookFormData.bodyZone) {
      toast.error('Please fill in all the required fields');
      return;
    }

    // Mock API endpoint for demonstration purposes
    const apiUrl = 'https://snylloestetica-backend.onrender.com/submit-bookForm';
    console.log('bookFormData:', bookFormData); 

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookFormData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data) {
        console.error('Error submitting form:', data);
        toast.error('Error submitting form. Please try again.');
      } else {
        console.log('Submission successful:', data);
        toast.success('Thank you for contacting us, we will be in touch shortly!');
        setSubmitStatus('success');
        // Close the BookForm after successful submission
        onClose();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again.');
    }
  };

  useEffect(() => {
    if (submitStatus === 'success') {
      // Reset the form after 3 seconds
      const resetForm = setTimeout(() => {
        setSubmitStatus(null);
        setbookFormData({
          name: '',
          phone: '',
          email: '',
          bodyZone: '',
        });
      }, 3000);
      return () => clearTimeout(resetForm);
    }
  }, [bookFormData, submitStatus]);

  return (
    <div>
      <div className="video-background">
      <video autoPlay loop muted className="video">
        <source src="/upload/first-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <Header />
    <div className="bookForm">
      <div className="first-container-bookForm" >
        <img    
          src="/upload/testing.png" 
          className="epilazexbookForm" 
          alt="epilazexbookForm">
        </img>
        <span className="big-heading-bookForm">
          <h1 className='heading-bookForm'>BOOK YOUR APPOINMENT</h1>
          <p className='heading-bookForm-p'>Talk to Our Experts</p>
        </span>
      </div>

      <div className="bookForm-content">
        <h2 className='line1-bookForm'>MAKE FLAWLESS SKIN</h2>
        <h3 className='line2-bookForm'>YOUR DAILY ACCESSORY</h3>
        <form id="bookForm-section" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className='name-bookForm'
                value={bookFormData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                className='telephone-bookForm'
                value={bookFormData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className='email-bookForm'
                value={bookFormData.email}
                onChange={handleChange}
              />
            <select
              name="bodyZone"
              className='bodyZone-bookForm'
              value={bookFormData.bodyZone || ''}
              onChange={handleChange}
            >
              <option value="" disabled >Select Body Zone </option>
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
          <button className='bookFormbutton'
          type="submit">Get Set Glow</button>
        </form>
            {submitStatus && (
              <p 
              className={submitStatus === 'success' ? 'success-message' : 'error-message'}>
                {submitStatus === 'success' ? 'Thank you for contacting us, we will be in touch shortly!' : 'Error submitting form. Please try again.'}
              </p>
            )}
      </div>
      <Footer />
    </div>
    </div>
    
  );
};

export default BookForm;
