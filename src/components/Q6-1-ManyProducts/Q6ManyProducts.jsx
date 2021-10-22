import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q6ManyProducts.css";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const ManyProducts = ({ storePrices, setStorePrices, name }) => {
  // getting the price
  const getPriceHandler = (e) => {
    let priceManyProducts = e.target.value;
    storePrices[name] = Number(priceManyProducts);
  };
  // END getting the price

  return (
    <motion.div
      className="many-products page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>How would you gauge the size and complexity of your eCommerce project?</QuestionTitle>
      <p>
        This number is a huge factor in determining the size of your store and
        project.
      </p>
      <Link to="/q71additional-func">
        <Button
          value="0"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          0-20
        </Button>
        <Button
          value="2500"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          21-100
        </Button>
        <Button
          value="6500"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          100+
        </Button>
      </Link>
    </motion.div>
  );
};

export default ManyProducts;
