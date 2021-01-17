import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q1LetsStart.scss";
import { Button, QuestionTitle } from "../../globalStyling";

const LetsStart = () => {
  return (
    <div className="lets-start">
      <QuestionTitle>An estimate for Your new Website?</QuestionTitle>
      <p>
        We are Wordpress and Shopify experts. Our understanding of both design
        and website development comes from years of experience working with a
        variety of clients through our London based team. *The prices you see
        are for your guide only, please speak to a member of our team for an
        accurate quote based on your requirements.
      </p>
      <Link to="/need-branding">
        <Button>Let's Start</Button>
      </Link>
    </div>
  );
};

export default LetsStart;
