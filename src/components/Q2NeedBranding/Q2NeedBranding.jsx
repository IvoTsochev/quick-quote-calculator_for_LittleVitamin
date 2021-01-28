import React from "react";
import { Link } from "react-router-dom";
import { forwardAnime } from "../../util";
// Styles
import "./Q2NeedBranding.scss";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const NeedBranding = ({ storePrices, setStorePrices, name }) => {
  // getting the price
  const getPriceHandler = (e) => {
    let priceNeedBranding = e.target.value;
    storePrices[name] = Number(priceNeedBranding);
  };
  // END getting the price

  return (
    <motion.div
      className="need-branding"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>Do you need branding?</QuestionTitle>
      <p>
        From a simple logo to the full brand story, an effective, engaging and
        attractive brand can make a business standout. Our packages are
        developed specifically for startups and small to medium business and aim
        to create a visual identity that is recognisable.
      </p>
      <Link to="/need-business-cards">
        <Button
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
          value="750"
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />
          Yes, I need branding
        </Button>
      </Link>

      <Link to="/selling-products">
        <Button
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
          value="0"
        >
          <FontAwesomeIcon className="btn-arrow" icon={faCircle} />
          No thanks
        </Button>
      </Link>
    </motion.div>
  );
};

export default NeedBranding;
