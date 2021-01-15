import React from "react";
import { Link } from "react-router-dom";
import "./Q4NeedGuidelines.scss";

const Q4NeedGuidelines = ({ q4, setQ4, totalPrice, setTotalPrice }) => {
  return (
    <div className="need-guidelines">
      <h2>DO YOU NEED A BRAND GUIDELINES DOC.?</h2>
      <Link to="/selling-products">
        <button>YES</button>
      </Link>

      <Link to="/selling-products">
        <button>NO</button>
      </Link>
    </div>
  );
};

export default Q4NeedGuidelines;
