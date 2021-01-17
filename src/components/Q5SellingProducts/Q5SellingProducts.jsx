import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q5SellingProducts.scss";
import { Button, QuestionTitle } from "../../globalStyling";

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
    <div className="selling-products">
      <QuestionTitle>
        Will your new website be selling products online?
      </QuestionTitle>
      <Link to="/many-products">
        <Button onClick={handleSellingProductsClick}>YES</Button>
      </Link>

      <Link to="/many-pages">
        <Button onClick={handleSellingProductsClick}>NO</Button>
      </Link>
    </div>
  );
};

export default Q5SellingProducts;
