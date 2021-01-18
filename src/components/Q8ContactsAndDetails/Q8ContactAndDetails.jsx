import React from "react";
// Styles
import "./Q8ContactsAndDetails.scss";
import { QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Q8ContactAndDetails = () => {
  return (
    <motion.div
      className="contacts-and-details"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <form className="contact-form">
        <QuestionTitle>
          Help us to provide you with a more accurate estimate.
        </QuestionTitle>
        <p>
          Write us a simple site brief and list out any special requiremenents
          that haven't yet been covered.
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

        <input className="contact-submit" type="submit" value="Send" />
      </form>
    </motion.div>
  );
};

export default Q8ContactAndDetails;
