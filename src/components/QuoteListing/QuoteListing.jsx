import React from "react";
// Style
import "./QuoteListing.css";

const QuoteListing = ({ name }) => {
  return (
    <div className="quote-listing">
      <p>{name}</p>
    </div>
  );
};

export default QuoteListing;
