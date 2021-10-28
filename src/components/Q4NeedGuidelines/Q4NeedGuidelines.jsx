import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Helpers
import { prices } from '../../helpers/prices';
// Styles
import "./Q4NeedGuidelines.css";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q4NeedGuidelines = ({ storePrices, setStorePrices, name }) => {

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // getting the price
  const getPriceHandler = (e) => {
    let priceNeedGuidelines = e.target.value;
    storePrices[name] = Number(priceNeedGuidelines);
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
      className="need-guidelines page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>Do you need a brand tool kit to share with digital, design marketing or PR agencies?</QuestionTitle>
      <Link to="/selling-products">
        <Button
          value={prices.Q4_Yes}
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
          disabled={isBtnDisabled}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          YES
        </Button>

        <Button
          value={prices.Q4_No}
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
          disabled={isBtnDisabled}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faCircle} /> NO
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q4NeedGuidelines;
