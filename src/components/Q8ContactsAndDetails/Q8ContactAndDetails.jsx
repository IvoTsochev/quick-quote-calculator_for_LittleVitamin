import React, { useState, useRef, useEffect, Fragment } from 'react';
import emailjs from 'emailjs-com';
import { Redirect } from 'react-router-dom';
// Styles
import './Q8ContactsAndDetails.css';
import { QuestionTitle } from '../../globalStyling';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';
// Components
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Q8ContactAndDetails = ({ storePrices }) => {
  const [isSent, setIsSent] = useState(undefined);

  // Client choices | passed to the hiddne input field
  let clientPreferences = Object.keys(storePrices)
    .map((key) => `${key}=${storePrices[key]}`)
    .join('<br>');

  let testObject = {
    paragraphs: [],
  };

  // iterate object and push to testObject
  Object.keys(storePrices).forEach((key) => {
    testObject.paragraphs.push(`${key}=${storePrices[key]} \r\n`);
  });

  // Initiating the contact form || https://www.emailjs.com/

  let serviceEmailJs = `${process.env.REACT_APP_SERVICE_EMAIL_JS}`;

  let templateEmailJs = `${process.env.REACT_APP_TEMPLATE_EMAIL_JS}`;

  let userIdEmailJs = `${process.env.REACT_APP_USERID_EMAIL_JS}`;

  function sendEmail(e) {
    e.preventDefault();

    setIsSent(true);

    setTimeout(() => {
      emailjs
        .sendForm(serviceEmailJs, templateEmailJs, e.target, userIdEmailJs)
        .then(
          (result) => {
            setIsSent(undefined);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }, 1500);
  }
  // END Initiating the contact form

  return (
    <motion.div
      className="contacts-and-details page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {!isSent ? (
        <div className="forms-container">
          <form className="contact-form" onSubmit={sendEmail}>
            <QuestionTitle>
              Help us to provide you with a more accurate estimate.
            </QuestionTitle>
            <p>
              Write us a simple site brief and list out any special
              requiremenents that haven't yet been covered.
            </p>
            {/* Textarea */}
            <textarea
              className="contact-message"
              placeholder="Message"
              name="message"
              cols="90"
              rows="10"
            />
            <QuestionTitle>
              Please provide us with some information about you?
            </QuestionTitle>
            <div className="contact-first-row">
              {/* Client preferences passed to the form */}
              {/* <input type="hidden" name="clientPreferences" value={ clientPreferences } /> */}
              <input
                type="hidden"
                name="paragraphs"
                value={testObject.paragraphs}
              />

              {/* Name */}
              <input
                className="contact-name"
                type="text"
                placeholder="Name"
                name="name"
              />
              {/* Email Address */}
              <input
                className="contact-email"
                type="email"
                placeholder="Email Address"
                name="email"
              />
            </div>

            <div className="contact-second-row">
              {/* Phone Number */}
              <input
                className="telephone-number"
                type="text"
                placeholder="Telephone Number"
                name="phone"
              />
              {/* Country */}
              <input
                className="contact-country"
                type="text"
                placeholder="Country"
                name="country"
              />

              {/* Coupon Code */}
              <input
                className="contact-coupon"
                type="text"
                placeholder="Coupon Code"
                name="coupon"
              />
            </div>

            <button className="contact-submit" type="submit" value="Send">
              Send
            </button>
          </form>
        </div>
      ) : (
        <LoadingSpinner />
      )}

      {isSent && <Redirect to="/thankyou" />}
    </motion.div>
  );
};

export default Q8ContactAndDetails;
