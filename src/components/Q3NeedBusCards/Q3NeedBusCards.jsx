import React from "react";

const Q3NeedBusCards = ({ q3, setQ3, totalPrice, setTotalPrice }) => {
  let sectionStyle = {
    display: "block",
  };

  // get what the client clicks on
  let q3HandleClick = (e) => {
    setQ3(e.target.innerText);
  };

  // hide current section if answer is chosen
  if (q3) {
    sectionStyle = {
      display: "none",
    };
  }

  if (q3 === "YES") {
    setTotalPrice(0 + 1500);
  }

  return (
    <div className="need-bus-cards" style={sectionStyle}>
      <h1>NEED BUSINESS CARDS?</h1>
      <button onClick={q3HandleClick}>YES</button>
      <button onClick={q3HandleClick}>NO</button>
    </div>
  );
};

export default Q3NeedBusCards;
