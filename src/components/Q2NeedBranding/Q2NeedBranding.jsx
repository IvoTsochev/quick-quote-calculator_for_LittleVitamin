import React from "react";
import Q5SellingProducts from "../Q5SellingProducts/Q5SellingProducts";
// Styles
import "./NeedBranding.scss";

const NeedBranding = ({ q2, setQ2, totalPrice, setTotalPrice }) => {
  let sectionStyle = {
    display: "block",
  };

  // get what the client clicks on
  let q2HandleClick = (e) => {
    if (e.target.innerText === "YES, I NEED BRANDING") {
      setQ2("YES, I NEED BRANDING");
    } else {
      setQ2("NO, I HAVE MY OWN BRANDING");
    }
  };

  // hide current section if answer is chosen
  if (q2) {
    sectionStyle = {
      display: "none",
    };
  }

  if (q2) {
    setTotalPrice(0 + 750);
  }

  return (
    <div className="need-branding" style={sectionStyle}>
      <h2>Do you need branding?</h2>
      <p>
        From a simple logo to the full brand story, an effective, engaging and
        attractive brand can make a business standout. Our packages are
        developed specifically for startups and small to medium businesses and
        aim to create a visual identity that is recognisable
      </p>
      <button onClick={q2HandleClick}>YES, I NEED BRANDING</button>
      <button onClick={q2HandleClick}>NO, I HAVE MY OWN BRANDING</button>
    </div>
  );
};

export default NeedBranding;
