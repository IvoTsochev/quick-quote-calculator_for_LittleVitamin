import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Helpers
import { prices } from '../../helpers/prices';
import { trackClick } from '../../helpers/googleClickTracking.js';
import { googlePageView } from '../../helpers/googleInitialize';
// Styles
import { Button, QuestionTitle } from "../../globalStyling";
import "./Q3NeedBusCards.css";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q3NeedBusCards = ({ storePrices, setStorePrices, name }) => {

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // Google Analytics
  useEffect(() => {
    googlePageView("NeedBusCards");
    console.log('NeedBusCards');
  }, []);

  // getting the price
  const getPriceHandler = (e) => {
    let priceNeedBusCards = e.target.value;
    storePrices[name] = Number(priceNeedBusCards);
  };
  // END getting the price

  // Delay button activity
  useEffect(() => {
    setTimeout(() => {
      setIsBtnDisabled((prev) => !prev)
    }, 1000);
  }, [setIsBtnDisabled])
  // END Delay button activity

  return (
    <motion.div
      className="need-bus-cards page"
      variants={ pageAnimation }
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        Are you looking to ideate a unique tone of voice, personas, and bespoke assets for your brand?
      </QuestionTitle>
      <Link to="/need-guidelines">
        <Button
          value={ prices.Q3_Yes }
          onClick={ (e) => {
            forwardAnime();
            getPriceHandler(e);
            trackClick("click", "Yes - Need Bus Cards");
          } }
          disabled={ isBtnDisabled }
        >
          <FontAwesomeIcon className="btn-arrow" icon={ faArrowAltCircleRight } />{ " " }
          YES
        </Button>

        <Button
          value={ prices.Q3_No }
          onClick={ (e) => {
            forwardAnime();
            getPriceHandler(e);
            trackClick("click", "No - Need Bus Cards");
          } }
          disabled={ isBtnDisabled }
        >
          <FontAwesomeIcon className="btn-arrow" icon={ faCircle } /> NO
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q3NeedBusCards;
