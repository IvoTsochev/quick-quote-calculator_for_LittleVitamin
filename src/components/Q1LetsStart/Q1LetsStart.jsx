import React from "react";
// Styles
import "./LetsStart.scss";

const LetsStart = ({ q1Visible, setQ1Visible }) => {
  let sectionStyle = {
    display: "block",
  };

  if (!q1Visible) {
    sectionStyle = {
      display: "none",
    };
  }

  let q1HandleClick = () => {
    setQ1Visible(false);
  };

  return (
    <div className="lets-start" style={sectionStyle}>
      <h2>AN ESTIMATE FOR YOUR NEW WEBSITE?</h2>
      <p>
        We are Wordpress and Shopify experts. Our understanding of both design
        and website development comes from years of experience working with a
        variety of clients through our London based team. *The prices you see
        are for your guide only, please speak to a member of our team for an
        accurate quote based on your requirements.
      </p>
      <button onClick={q1HandleClick}>Let's Start</button>
    </div>
  );
};

export default LetsStart;
