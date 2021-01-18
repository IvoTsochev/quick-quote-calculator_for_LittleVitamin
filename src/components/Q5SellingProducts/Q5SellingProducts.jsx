import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q5SellingProducts.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Q5SellingProducts = ({ storePrices, setStorePrices }) => {
  let handleSellingProductsClick = (e) => {
    let btnText = e.target.innerText;
    if (btnText === "YES") {
      setStorePrices({ ...storePrices, SellingProducts: "3500" });
    } else if (btnText === "NO") {
      setStorePrices({ ...storePrices, SellingProducts: "2500" });
    }
  };

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
        <Button onClick={handleSellingProductsClick}>YES</Button>
      </Link>

      <Link to="/many-pages">
        <Button onClick={handleSellingProductsClick}>NO</Button>
      </Link>
    </motion.div>
  );
};

export default Q5SellingProducts;
