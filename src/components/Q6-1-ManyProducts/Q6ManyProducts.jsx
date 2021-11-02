import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Helpers
import { prices } from '../../helpers/prices';
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

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // getting the price
  const getPriceHandler = (e) => {
    let priceManyProducts = e.target.value;
    storePrices[name] = Number(priceManyProducts);
  };
  // END getting the price

  // Delay button activity
  useEffect(() => {
    setTimeout(() => {
      setIsBtnDisabled((prev) => !prev)
    }, 1000);
  }, [setIsBtnDisabled])
  // END Delay button activity

  return (
    <motion.div
      className="many-products page"
      variants={ pageAnimation }
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>How would you gauge the size and complexity of your eCommerce project?</QuestionTitle>
      <p>
        The complexity of your project is an essential factor in determining the size of your projec.
      </p>
      <Link to="/q71additional-func">

        <Button
          value={ prices.Q61_Standard }
          onClick={ (e) => {
            forwardAnime();
            getPriceHandler(e);
          } }
          disabled={ isBtnDisabled }
        >
          <FontAwesomeIcon className="btn-arrow" icon={ faArrowAltCircleRight } />{ " " }
          Standard
        </Button>

        <Button
          value={ prices.Q61_Premium }
          onClick={ (e) => {
            forwardAnime();
            getPriceHandler(e);
          } }
          disabled={ isBtnDisabled }
        >
          <FontAwesomeIcon className="btn-arrow" icon={ faArrowAltCircleRight } />{ " " }
          Premium
        </Button>

        <Button
          value={ prices.Q61_Advanced }
          onClick={ (e) => {
            forwardAnime();
            getPriceHandler(e);
          } }
          disabled={ isBtnDisabled }
        >
          <FontAwesomeIcon className="btn-arrow" icon={ faArrowAltCircleRight } />{ " " }
          Advanced
        </Button>

        <Button
          value={ prices.Q61_NotSure }
          onClick={ (e) => {
            forwardAnime();
            getPriceHandler(e);
          } }
          disabled={ isBtnDisabled }
        >
          <FontAwesomeIcon className="btn-arrow" icon={ faArrowAltCircleRight } />{ " " }
          Not sure
        </Button>

      </Link>
    </motion.div>
  );
};

export default ManyProducts;
