import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q4NeedGuidelines.scss";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime, getPriceHandler } from "../../util";

const Q4NeedGuidelines = ({ storePrices, setStorePrices }) => {
  return (
    <motion.div
      className="need-guidelines"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>Do you need a brand guidelines doc.?</QuestionTitle>
      <Link to="/selling-products">
        <Button value="1000" onClick={forwardAnime}>
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          YES
        </Button>

        <Button value="0" onClick={forwardAnime}>
          <FontAwesomeIcon className="btn-arrow" icon={faCircle} /> NO
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q4NeedGuidelines;
