import React from "react";
// Styles
import "./Quote.scss";

const Quote = ({ totalPrice }) => {
  return (
    <div className="quote">
      <div className="quote-title">
        <h3>Quote</h3>
        <hr />
      </div>
      <div className="quote-total">
        <hr />
        <div className="quote-total-inner">
          <h3>Total</h3>
          <p className="quote-total-price">£{totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;