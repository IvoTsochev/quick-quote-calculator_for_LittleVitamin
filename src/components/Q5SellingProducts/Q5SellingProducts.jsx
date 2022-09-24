import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Helpers
import { prices } from '../../helpers/prices';
import { googlePageView } from '../../helpers/googleInitialize';
import { trackClick } from '../../helpers/googleClickTracking.js';
// Styles
import "./Q5SellingProducts.css";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q5SellingProducts = ({ storePrices, setStorePrices, name }) => {

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // Google Analytics
  useEffect(() => {
    googlePageView("SellingProducts")
  }, []);

  // getting the price
  const getPriceHandler = (e) => {
    let priceSellingProducts = e.target.value;
    storePrices[name] = Number(priceSellingProducts);
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
      className="selling-products page"
      variants={ pageAnimation }
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        Will your new website be selling products online?
      </QuestionTitle>
      <p>
        eCommerce is becoming more and more popular as retailers bring their
        products & stores online. Little Vitamin are Shopify Experts and our
        eCommerce packages offer a full range of options for your online store,
        making full use of the intuitive Shopify platform.
      </p>
      <Link to="/many-products">
        <Button
          value={ prices.Q5_Yes }
          onClick={ (e) => {
            forwardAnime();
            getPriceHandler(e);
            trackClick("click", "Yes - Selling Products");
          } }
          disabled={ isBtnDisabled }
        >
          <FontAwesomeIcon className="btn-arrow" icon={ faArrowAltCircleRight } />{ " " }
          Yes, I will be selling
        </Button>
      </Link>

      <Link to="/many-pages">
        <Button
          value={ prices.Q5_No }
          onClick={ (e) => {
            forwardAnime();
            getPriceHandler(e);
            trackClick("click", "No - Selling Products");
          } }
          disabled={ isBtnDisabled }
        >
          <FontAwesomeIcon className="btn-arrow" icon={ faCircle } /> Nope
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q5SellingProducts;
