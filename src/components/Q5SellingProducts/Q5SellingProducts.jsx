import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q5SellingProducts.scss";

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
      <h2>WILL YOUR NEW WEBSITE BE SELLING PRODUCTS ONLINE?</h2>
      <Link to="/many-products">
        <button onClick={handleSellingProductsClick}>YES</button>
      </Link>

      <Link to="/many-pages">
        <button onClick={handleSellingProductsClick}>NO</button>
      </Link>
    </div>
  );
};

export default Q5SellingProducts;
