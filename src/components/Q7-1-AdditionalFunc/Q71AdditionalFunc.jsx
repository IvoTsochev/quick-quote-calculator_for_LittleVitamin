import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q71AdditionalFunc.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q71AdditionalFunc = () => {
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
            <input type="checkbox" id="checkboxOne" value="Related products" />
            <label htmlFor="checkboxOne">Related products +£195</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTwo" value="Gift wrapping" />
            <label htmlFor="checkboxTwo">Gift wrapping +£130</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxThree" value="Subscriptions" />
            <label htmlFor="checkboxThree">Subscriptions</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFour"
              value="Live support chat"
            />
            <label htmlFor="checkboxFour">Live support chat +£130</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFive"
              value="Loyalty programme"
            />
            <label htmlFor="checkboxFive">Loyalty programme +£480</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSix" value="Wishlist" />
            <label htmlFor="checkboxSix">Wishlist +£390</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxSeven"
              value="Currency converter"
            />
            <label htmlFor="checkboxSeven">Currency converter +£260</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxEight" value="Product reviews" />
            <label htmlFor="checkboxEight">Product reviews +£260</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxNine" value="Pre-order" />
            <label htmlFor="checkboxNine">Pre-order +£260</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxTen"
              value="Newsletter sign-up"
            />
            <label htmlFor="checkboxTen">Newsletter sign-up +£195</label>
          </li>
          <li className="ks-selected">
            <input
              type="checkbox"
              id="checkboxEleven"
              value="Customisable product"
            />
            <label htmlFor="checkboxEleven">Customisable product +£480</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxTwelve"
              value="Custom size guide"
            />
            <label htmlFor="checkboxTwelve">Custom size guide +£260</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxThirteen"
              value="Product filtering"
            />
            <label htmlFor="checkboxThirteen">Product filtering +£390</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxFourteen"
              value="Recurring orders & Subscriptions"
            />
            <label htmlFor="checkboxFourteen">
              Recurring orders & Subscriptions +£480
            </label>
          </li>
        </ul>
      </div>

      <Link to="/contacts-and-details">
        <Button onClick={forwardAnime}>Continue</Button>
      </Link>
    </motion.div>
  );
};

export default Q71AdditionalFunc;
