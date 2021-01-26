import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q72AdditionalFunc.scss";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q72AdditionalFunc = () => {
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
          <li>
            <input type="checkbox" id="checkboxOne" value="130" />
            <label htmlFor="checkboxOne">Photo gallery +£130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTwo" value="195" />
            <label htmlFor="checkboxTwo">Newsletter sign-up +£195</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxThree" value="130" />
            <label htmlFor="checkboxThree">Video content £130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFour" value="195" />
            <label htmlFor="checkboxFour">Age gate +£195</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFive" value="480" />
            <label htmlFor="checkboxFive">File sharing +£480</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSix" value="480" />
            <label htmlFor="checkboxSix">Booking schedule +£480</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSeven" value="130" />
            <label htmlFor="checkboxSeven">Contact form +£130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxEight" value="130" />
            <label htmlFor="checkboxEight">Social media feed +£130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxNine" value="130" />
            <label htmlFor="checkboxNine">Live support chat +£130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTen" value="480" />
            <label htmlFor="checkboxTen">Event calendar +£480</label>
          </li>
          <li className="ks-selected">
            <input type="checkbox" id="checkboxEleven" value="130" />
            <label htmlFor="checkboxEleven">Branded Google Map +£130</label>
          </li>
        </ul>
      </div>

      <Link to="/contacts-and-details">
        <Button onClick={forwardAnime}>
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          Continue
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q72AdditionalFunc;
