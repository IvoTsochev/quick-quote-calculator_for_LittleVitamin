import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q4NeedGuidelines.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Q4NeedGuidelines = ({ storePrices, setStorePrices }) => {
  let handleNeedGuidelinesClick = (e) => {
    let btnText = e.target.innerText;
    if (btnText === "YES") {
      setStorePrices({ ...storePrices, NeedGuidelines: "1000" });
    } else if (btnText === "NO") {
      setStorePrices({ ...storePrices, NeedGuidelines: "0" });
    }
  };

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
        <Button onClick={handleNeedGuidelinesClick}>YES</Button>

        <Button onClick={handleNeedGuidelinesClick}>NO</Button>
      </Link>
    </motion.div>
  );
};

export default Q4NeedGuidelines;
