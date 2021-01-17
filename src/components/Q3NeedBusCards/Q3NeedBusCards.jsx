import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Button, QuestionTitle } from "../../globalStyling";

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
      <QuestionTitle>Need Business Cards?</QuestionTitle>
      <Link to="/need-guidelines">
        <Button onClick={handleNeedBusCardsClick}>YES</Button>

        <Button onClick={handleNeedBusCardsClick}>NO</Button>
      </Link>
    </div>
  );
};

export default Q3NeedBusCards;
