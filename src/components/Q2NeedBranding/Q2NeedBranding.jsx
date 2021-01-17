import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q2NeedBranding.scss";
import { Button, QuestionTitle } from "../../globalStyling";

const NeedBranding = ({ storePrices, setStorePrices }) => {
  let handleNeedBrandingClick = (e) => {
    let btnText = e.target.innerText;
    if (btnText === "YES, I NEED BRANDING") {
      setStorePrices({ ...storePrices, NeedBranding: "750" });
    } else if (btnText === "NO, I HAVE MY OWN BRANDING") {
      setStorePrices({ ...storePrices, NeedBranding: "0" });
    }
  };

  return (
    <div className="need-branding">
      <QuestionTitle>Do you need branding?</QuestionTitle>
      <p>
        From a simple logo to the full brand story, an effective, engaging and
        attractive brand can make a business standout. Our packages are
        developed specifically for startups and small to medium businesses and
        aim to create a visual identity that is recognisable
      </p>
      <Link to="/need-business-cards">
        <Button onClick={handleNeedBrandingClick}>YES, I NEED BRANDING</Button>
      </Link>

      <Link to="/selling-products">
        <Button onClick={handleNeedBrandingClick}>
          NO, I HAVE MY OWN BRANDING
        </Button>
      </Link>
    </div>
  );
};

export default NeedBranding;
