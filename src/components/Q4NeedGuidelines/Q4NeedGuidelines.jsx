import React from "react";
import "./Q4NeedGuidelines.scss";

const Q4NeedGuidelines = ({ q4, setQ4, totalPrice, setTotalPrice }) => {
  let sectionStyle = {
    display: "block",
  };

  // get what the client clicks on
  let q4HandleClick = (e) => {
    setQ4(e.target.innerText);
  };

  // hide current section if answer is chosen
  if (q4) {
    sectionStyle = {
      display: "none",
    };
  }

  if (q4 === "YES") {
    setTotalPrice(2500);
  }

  return (
    <div className="need-guidelines" style={sectionStyle}>
      <h2>DO YOU NEED A BRAND GUIDELINES DOC.?</h2>
      <button onClick={q4HandleClick}>YES</button>
      <button onClick={q4HandleClick}>NO</button>
    </div>
  );
};

export default Q4NeedGuidelines;
