// src/components/routes/LandingPage/Popup/Popup.js


import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Popup.css';

const Popup = ({ onClose }) => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [popupData, setPopupData] = useState({
    treatmentType: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPopupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation
    if (!popupData.phoneNumber || !popupData.treatmentType) {
      toast.error('Please fill in all the required fields');
      return;
    }

    // Mock API endpoint for demonstration purposes
    const apiUrl = 'https://snylloestetica-backend.onrender.com/submit-popup';
    console.log('popupData:', popupData); 

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(popupData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data) {
        console.error('Error submitting form:', data);
        toast.error('Error submitting form. Please try again.');
      } else {
        console.log('Submission successful:', data);
        toast.success('Thank you for contacting us, we will be in touch shortly!');
        setSubmitStatus('success');
        // Close the Popup after successful submission
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
        setPopupData({
          phoneNumber: '',
          treatmentType: '',
        });
      }, 3000);
      return () => clearTimeout(resetForm);
    }
  }, [popupData, submitStatus]);

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className='line1-popup'>Now Make Hairless Skin Your Daily Accessory!</h2>
        <h3 className='line2-popup'>Try our LHR for ₹499/- only</h3>
        <h3 className='line3-popup'>Choose any body zone for trial</h3>
        <form id="popup-section" onSubmit={handleSubmit}>
          <select
            name="treatmentType"
            className='treatment-popup'
            value={popupData.treatmentType}
            onChange={handleChange}
          >
            <option value="" disabled selected>Choose Your Treatment</option>
            <option value="treatmentType1">Treatment 1</option>
            <option value="treatmentType2">Treatment 2</option>
            <option value="treatmentType3">Treatment 3</option>
          </select>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            className='telephone-popup'
            value={popupData.phoneNumber}
            onChange={handleChange}
          />
          <button className='popupbutton'
          type="submit">Get Set Glow</button>
        </form>
            {submitStatus && (
              <p 
              className={submitStatus === 'success' ? 'success-message' : 'error-message'}>
                {submitStatus === 'success' ? 'Thank you for contacting us, we will be in touch shortly!' : 'Error submitting form. Please try again.'}
              </p>
            )}
      </div>
    </div>
  );
};

export default Popup;
