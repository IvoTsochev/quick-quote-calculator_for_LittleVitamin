import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q6ManyPages.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Q6ManyPages = () => {
  return (
    <motion.div
      className="many-pages"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        How many pages/sections will your website have?
      </QuestionTitle>
      <p>
        Common pages include Homepage, About us, Our Services, Contact us etc.
        The content can also be arranged into different sections on a single
        page layout.
      </p>
      <Link to="/q72additional-func">
        <Button>1-5</Button>
        <Button>6-11</Button>
        <Button>12+</Button>
      </Link>
    </motion.div>
  );
};

export default Q6ManyPages;
