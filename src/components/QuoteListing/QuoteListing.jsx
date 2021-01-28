import React from "react";
// Style
import "./QuoteListing.scss";

const QuoteListing = ({ name }) => {
  return (
    <div className="quote-listing">
      <p>{name}</p>
    </div>
  );
};

export default QuoteListing;
