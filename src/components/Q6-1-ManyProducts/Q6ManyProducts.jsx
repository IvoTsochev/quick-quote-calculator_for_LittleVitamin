import React from "react";
import { Link } from "react-router-dom";
import "./Q6ManyProducts.scss";

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
      <h2>HOW MANY PRODUCTS WILL YOU BE SELLING?</h2>
      <Link>
        <button onClick={handleManyProductsClick}>1-5</button>
        <button onClick={handleManyProductsClick}>6-11</button>
        <button onClick={handleManyProductsClick}>12+</button>
      </Link>
    </div>
  );
};

export default ManyProducts;
