import React from "react";
import "./Q5SellingProducts.scss";

const Q5SellingProducts = ({ q5, setQ5, totalPrice, setTotalPrice }) => {
  let sectionStyle = {
    display: "block",
  };

  // get what the client clicks on
  let q5HandleClick = (e) => {
    if (e.target.innerText === "YES") {
      setQ5(true);
    } else {
      setQ5(false);
    }
  };

  // hide current section if answer is chosen
  if (q5) {
    sectionStyle = {
      display: "none",
    };
  }

  return (
    <div className="selling-products" style={sectionStyle}>
      <h2>WILL YOUR NEW WEBSITE BE SELLING PRODUCTS ONLINE?</h2>
      <button onClick={q5HandleClick}>YES</button>
      <button onClick={q5HandleClick}>NO</button>
    </div>
  );
};

export default Q5SellingProducts;
