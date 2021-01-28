import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q5SellingProducts.scss";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q5SellingProducts = ({ storePrices, setStorePrices, name }) => {
  // getting the price
  const getPriceHandler = (e) => {
    let priceSellingProducts = e.target.value;
    storePrices[name] = Number(priceSellingProducts);
  };
  // END getting the price

  return (
    <motion.div
      className="selling-products"
      variants={pageAnimation}
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
          value="3500"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          YES
        </Button>
      </Link>

      <Link to="/many-pages">
        <Button
          value="2500"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faCircle} /> NO
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q5SellingProducts;
