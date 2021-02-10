import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
// Styles
import "./Q8ContactsAndDetails.scss";
import { QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Q8ContactAndDetails = ({ storePrices }) => {
  const [emailInput, setEmailInput] = useState("");

  // targeting the Klaviyo html snippet so we can grab the injected input field this way
  const klaviyoInput = useRef("");

  // every time emailInput is changed we are drilling to grab the input field of Klaviyo and duplicate
  // what the client types in the default email field
  // ********** Klaviyo code snippet is hidden by default so the client wont type his email twice ***********
  useEffect(() => {
    setTimeout(() => {
      if (klaviyoInput.current) {
        // grabing the klaviyo input field
        const klaviyoInputField = async () => {
          let value = await klaviyoInput.current.children[0].children[0]
            .children[0].children[0].children[0].children[0].children[0];

          return value;
        };

        klaviyoInputField().then((res) => {
          res.value = emailInput;
        });
      }
    }, 500);
  }, [emailInput]);

  // submiting the Klaviyo form after clicking the Send button on normal form

  // let submitKlaviyoForm = () => {
  //   let klaviyoForm = klaviyoInput.current.children[0].children[0];

  //   setTimeout(() => {
  //     klaviyoForm.submit();
  //   });
  // };

  // Implementing the contact form
  let serviceEmailJs = "service_lmvx9rq";
  let templateEmailJs = "template_m709w7r";
  let userIdEmailJs = "user_t00SWW3rzOZdhMddvrdir";

  function sendEmail(e) {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    emailjs
      .sendForm(serviceEmailJs, templateEmailJs, e.target, userIdEmailJs)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <motion.div
      className="contacts-and-details"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* Klaviyo snippet */}
      <div className="klaviyo-form-UijHwS" ref={klaviyoInput}></div>
      {/* END Klaviyo snippet */}
      <form className="contact-form" onSubmit={sendEmail}>
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
          {/* Hidden */}
          <input type="hidden" name="client-stats" value />

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
            onChange={(e) => setEmailInput(e.target.value)}
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

        <input
          className="contact-submit"
          type="submit"
          value="Send"
          // onClick={submitKlaviyoForm}
        />
      </form>
    </motion.div>
  );
};

export default Q8ContactAndDetails;
