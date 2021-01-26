import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q71AdditionalFunc.scss";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q71AdditionalFunc = () => {
  // getting the price
  const getPriceHandler = (e) => {
    let price71AdditionalFunc = e.target.value;
  };
  // END getting the price

  return (
    <motion.div
      className="q71-additional-func"
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

      <div className="many-products-add">
        <ul className="ks-cboxtags">
          <li>
            <input type="checkbox" id="checkboxOne" value="195" />
            <label htmlFor="checkboxOne">Related products +£195</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTwo" value="130" />
            <label htmlFor="checkboxTwo">Gift wrapping +£130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxThree" value="0" />
            <label htmlFor="checkboxThree">Subscriptions</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFour" value="130" />
            <label htmlFor="checkboxFour">Live support chat +£130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFive" value="480" />
            <label htmlFor="checkboxFive">Loyalty programme +£480</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSix" value="390" />
            <label htmlFor="checkboxSix">Wishlist +£390</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSeven" value="260" />
            <label htmlFor="checkboxSeven">Currency converter +£260</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxEight" value="260" />
            <label htmlFor="checkboxEight">Product reviews +£260</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxNine" value="260" />
            <label htmlFor="checkboxNine">Pre-order +£260</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTen" value="195" />
            <label htmlFor="checkboxTen">Newsletter sign-up +£195</label>
          </li>
          <li className="ks-selected">
            <input type="checkbox" id="checkboxEleven" value="480" />
            <label htmlFor="checkboxEleven">Customisable product +£480</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTwelve" value="260" />
            <label htmlFor="checkboxTwelve">Custom size guide +£260</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxThirteen" value="390" />
            <label htmlFor="checkboxThirteen">Product filtering +£390</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFourteen" value="480" />
            <label htmlFor="checkboxFourteen">
              Recurring orders & Subscriptions +£480
            </label>
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

export default Q71AdditionalFunc;
