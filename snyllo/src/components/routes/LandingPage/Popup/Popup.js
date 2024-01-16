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
    const apiUrl = 'https://snyllo-estetica-backend.onrender.com/user-details-popup';
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
            className='bodyZone-popup'
            name="bodyZone"
            value={popupData.bodyZone}
            onChange={handleChange}
          >
            <option value="" disabled selected>Select Body Part</option>
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
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            className='telephone-popup'
            value={popupData.phone}
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
