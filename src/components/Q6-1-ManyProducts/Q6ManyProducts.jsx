import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q6ManyProducts.scss";
import { Button, QuestionTitle } from "../../globalStyling";

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
    <div className="many-products">
      <QuestionTitle>How many products will you be selling?</QuestionTitle>
      <Link>
        <Button onClick={handleManyProductsClick}>1-5</Button>
        <Button onClick={handleManyProductsClick}>6-11</Button>
        <Button onClick={handleManyProductsClick}>12+</Button>
      </Link>
    </div>
  );
};

export default ManyProducts;
