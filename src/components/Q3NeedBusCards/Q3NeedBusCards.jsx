import React from "react";
import { Link } from "react-router-dom";

const Q3NeedBusCards = ({ q3, setQ3, totalPrice, setTotalPrice }) => {
  return (
    <div className="need-bus-cards">
      <h1>NEED BUSINESS CARDS?</h1>
      <Link to="/need-guidelines">
        <button>YES</button>
      </Link>

      <Link to="/need-guidelines">
        <button>NO</button>
      </Link>
    </div>
  );
};

export default Q3NeedBusCards;
