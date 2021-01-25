import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q6ManyProducts.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const ManyProducts = ({ storePrices, setStorePrices }) => {
  return (
    <motion.div
      className="many-products"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>How many products will you be selling?</QuestionTitle>
      <p>
        This number is a huge factor in determining the size of your store and
        project.
      </p>
      <Link to="/q71additional-func">
        <Button onClick={forwardAnime}>0-20</Button>
        <Button onClick={forwardAnime}>21-100</Button>
        <Button onClick={forwardAnime}>100+</Button>
      </Link>
    </motion.div>
  );
};

export default ManyProducts;
