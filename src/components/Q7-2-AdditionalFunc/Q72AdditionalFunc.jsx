import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q72AdditionalFunc.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q72AdditionalFunc = () => {
  let clickFunc = (e) => {
    console.log(e.target.value);
  };

  return (
    <motion.div
      className="q72-additional-func"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        Are there any additional functionalities you are interested in?
      </QuestionTitle>
      <p>
        Functionality is it's interaction between the site and the site visitor,
        features to enhance your website.
      </p>
      <div className="many-pages-add">
        <ul className="ks-cboxtags">
          <li onClick={clickFunc}>
            <input type="checkbox" id="checkboxOne" value="Photo gallery" />
            <label htmlFor="checkboxOne">Photo gallery +£130</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxTwo"
              value="Newsletter sign-up"
            />
            <label htmlFor="checkboxTwo">Newsletter sign-up +£195</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxThree" value="Video content" />
            <label htmlFor="checkboxThree">Video content £130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFour" value="Age gate" />
            <label htmlFor="checkboxFour">Age gate +£195</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFive" value="File sharing" />
            <label htmlFor="checkboxFive">File sharing +£480</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSix" value="Booking schedule" />
            <label htmlFor="checkboxSix">Booking schedule +£480</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSeven" value="Contact form" />
            <label htmlFor="checkboxSeven">Contact form +£130</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxEight"
              value="Social media feed"
            />
            <label htmlFor="checkboxEight">Social media feed +£130</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxNine"
              value="Live support chat"
            />
            <label htmlFor="checkboxNine">Live support chat +£130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTen" value="Event calendar" />
            <label htmlFor="checkboxTen">Event calendar +£480</label>
          </li>
          <li className="ks-selected">
            <input
              type="checkbox"
              id="checkboxEleven"
              value="Branded Google Map"
            />
            <label htmlFor="checkboxEleven">Branded Google Map +£130</label>
          </li>
        </ul>
      </div>

      <Link to="/contacts-and-details">
        <Button onClick={forwardAnime}>Continue</Button>
      </Link>
    </motion.div>
  );
};

export default Q72AdditionalFunc;
