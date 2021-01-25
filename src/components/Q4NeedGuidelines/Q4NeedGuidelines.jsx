import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q4NeedGuidelines.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

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
        <Button onClick={forwardAnime}>YES</Button>

        <Button onClick={forwardAnime}>NO</Button>
      </Link>
    </motion.div>
  );
};

export default Q4NeedGuidelines;
