import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { prices } from '../../helpers/prices';
// Styles
import "./Q6ManyPages.css";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q6ManyPages = ({ storePrices, setStorePrices, name }) => {

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // getting the price
  const getPriceHandler = (e) => {
    let priceManyPages = e.target.value;
    storePrices[name] = Number(priceManyPages);
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
      className="many-pages page"
      variants={ pageAnimation }
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        How would you gauge the size and complexity of your project?
      </QuestionTitle>
      <p>
        The complexity of your project is an essential factor in determining the size of your project.
      </p>
      <Link to="/q72additional-func">

        <Button
          value={ prices.Q62_Standard }
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
          value={ prices.Q62_Premium }
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
          value={ prices.Q62_Advanced }
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
          value={ prices.Q62_NotSure }
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

export default Q6ManyPages;
