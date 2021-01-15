import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./NeedBranding.scss";

const NeedBranding = ({ q2, setQ2, totalPrice, setTotalPrice }) => {
  return (
    <div className="need-branding">
      <h2>Do you need branding?</h2>
      <p>
        From a simple logo to the full brand story, an effective, engaging and
        attractive brand can make a business standout. Our packages are
        developed specifically for startups and small to medium businesses and
        aim to create a visual identity that is recognisable
      </p>
      <Link to="/need-business-cards">
        <button>YES, I NEED BRANDING</button>
      </Link>

      <Link to="/selling-products">
        <button>NO, I HAVE MY OWN BRANDING</button>
      </Link>
    </div>
  );
};

export default NeedBranding;
