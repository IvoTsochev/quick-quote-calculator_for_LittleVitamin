import React from "react";
import { Link } from "react-router-dom";
import "./Q4NeedGuidelines.scss";

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
      <h2>DO YOU NEED A BRAND GUIDELINES DOC.?</h2>
      <Link to="/selling-products">
        <button onClick={handleNeedGuidelinesClick}>YES</button>

        <button onClick={handleNeedGuidelinesClick}>NO</button>
      </Link>
    </div>
  );
};

export default Q4NeedGuidelines;
