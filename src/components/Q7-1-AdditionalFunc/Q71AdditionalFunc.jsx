import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q71AdditionalFunc.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

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
      <Link to="/contacts-and-details">
        <Button>Continue</Button>
      </Link>
    </motion.div>
  );
};

export default Q71AdditionalFunc;
