import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Button, QuestionTitle } from "../../globalStyling";
import "./Q3NeedBusCards.scss";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Q3NeedBusCards = ({ storePrices, setStorePrices }) => {
  let handleNeedBusCardsClick = (e) => {
    let btnText = e.target.innerText;
    if (btnText === "YES") {
      setStorePrices({ ...storePrices, NeedBusCards: "750" });
    } else if (btnText === "NO") {
      setStorePrices({ ...storePrices, NeedBusCards: "0" });
    }
  };

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
        <Button onClick={handleNeedBusCardsClick}>YES</Button>

        <Button onClick={handleNeedBusCardsClick}>NO</Button>
      </Link>
    </motion.div>
  );
};

export default Q3NeedBusCards;
