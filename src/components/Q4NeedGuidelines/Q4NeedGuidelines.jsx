import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q4NeedGuidelines.scss";
import { Button, QuestionTitle } from "../../globalStyling";

const Q4NeedGuidelines = ({ storePrices, setStorePrices }) => {
  let handleNeedGuidelinesClick = (e) => {
    let btnText = e.target.innerText;
    if (btnText === "YES") {
      setStorePrices({ ...storePrices, NeedGuidelines: "1000" });
    } else if (btnText === "NO") {
      setStorePrices({ ...storePrices, NeedGuidelines: "0" });
    }
  };

  return (
    <div className="need-guidelines">
      <QuestionTitle>Do you need a brand guidelines doc.?</QuestionTitle>
      <Link to="/selling-products">
        <Button onClick={handleNeedGuidelinesClick}>YES</Button>

        <Button onClick={handleNeedGuidelinesClick}>NO</Button>
      </Link>
    </div>
  );
};

export default Q4NeedGuidelines;
