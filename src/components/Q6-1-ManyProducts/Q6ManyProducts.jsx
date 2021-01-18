import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q6ManyProducts.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const ManyProducts = ({ storePrices, setStorePrices }) => {
  let handleManyProductsClick = (e) => {
    let btnText = e.target.innerText;
    if (btnText === "1-5") {
      setStorePrices({ ...storePrices, ManyProducts: "0" });
    } else if (btnText === "6-11") {
      setStorePrices({ ...storePrices, ManyProducts: "2500" });
    } else if (btnText === "12+") {
      setStorePrices({ ...storePrices, ManyProducts: "3000" });
    }
  };

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
        <Button onClick={handleManyProductsClick}>0-20</Button>
        <Button onClick={handleManyProductsClick}>21-100</Button>
        <Button onClick={handleManyProductsClick}>100+</Button>
      </Link>
    </motion.div>
  );
};

export default ManyProducts;
