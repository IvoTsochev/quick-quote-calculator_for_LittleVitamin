import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Button, QuestionTitle } from "../../globalStyling";
import "./Q3NeedBusCards.scss";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q3NeedBusCards = ({ storePrices, setStorePrices }) => {
  return (
    <motion.div
      className="need-bus-cards"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        Do you need branded business cards and email signatures?
      </QuestionTitle>
      <Link to="/need-guidelines">
        <Button onClick={forwardAnime}>YES</Button>

        <Button onClick={forwardAnime}>NO</Button>
      </Link>
    </motion.div>
  );
};

export default Q3NeedBusCards;
