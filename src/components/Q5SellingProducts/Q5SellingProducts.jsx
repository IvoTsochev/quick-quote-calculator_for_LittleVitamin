import React from "react";
import "./Q5SellingProducts.scss";

const Q5SellingProducts = ({ q5, setQ5, totalPrice, setTotalPrice }) => {
  return (
    <div className="selling-products">
      <h2>WILL YOUR NEW WEBSITE BE SELLING PRODUCTS ONLINE?</h2>
      <button>YES</button>
      <button>NO</button>
    </div>
  );
};

export default Q5SellingProducts;
