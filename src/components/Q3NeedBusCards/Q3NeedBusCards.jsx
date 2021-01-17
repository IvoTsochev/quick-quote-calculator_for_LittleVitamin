import React from "react";
import { Link } from "react-router-dom";

const Q3NeedBusCards = ({ storePrices, setStorePrices }) => {
  let handleNeedBusCardsClick = (e) => {
    let btnText = e.target.innerText;
    if (btnText === "YES") {
      setStorePrices({ ...storePrices, NeedBusCards: "750" });
    } else if (btnText === "NO") {
      setStorePrices({ ...storePrices, NeedBusCards: "0" });
    }
  };

  return (
    <div className="need-bus-cards">
      <h1>NEED BUSINESS CARDS?</h1>
      <Link to="/need-guidelines">
        <button onClick={handleNeedBusCardsClick}>YES</button>

        <button onClick={handleNeedBusCardsClick}>NO</button>
      </Link>
    </div>
  );
};

export default Q3NeedBusCards;
