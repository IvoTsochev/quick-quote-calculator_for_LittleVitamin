import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q1LetsStart.scss";

const LetsStart = () => {
  return (
    <div className="lets-start">
      <h2>AN ESTIMATE FOR YOUR NEW WEBSITE?</h2>
      <p>
        We are Wordpress and Shopify experts. Our understanding of both design
        and website development comes from years of experience working with a
        variety of clients through our London based team. *The prices you see
        are for your guide only, please speak to a member of our team for an
        accurate quote based on your requirements.
      </p>
      <Link to="/need-branding">
        <button>Let's Start</button>
      </Link>
    </div>
  );
};

export default LetsStart;
