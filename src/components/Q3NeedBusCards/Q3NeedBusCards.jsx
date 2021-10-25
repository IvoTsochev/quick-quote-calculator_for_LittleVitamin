import React from "react";
import { Link } from "react-router-dom";
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
  // getting the price
  const getPriceHandler = (e) => {
    let priceNeedBusCards = e.target.value;
    storePrices[name] = Number(priceNeedBusCards);
  };
  // END getting the price

  return (
    <motion.div
      className="need-bus-cards page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        Are you looking to ideate a unique tone of voice, personas, and bespoke assets for your brand?
      </QuestionTitle>
      <Link to="/need-guidelines">
        <Button
          value="1275"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          YES
        </Button>

        <Button
          value="0"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faCircle} /> NO
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q3NeedBusCards;
