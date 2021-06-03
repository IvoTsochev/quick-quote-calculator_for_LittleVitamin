import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q1LetsStart.css";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const LetsStart = () => {
  return (
    <motion.div
      className="lets-start page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>An estimate for your new website?</QuestionTitle>
      <p>
        We are Wordpress and Shopify experts. Our understanding of both design
        and website development comes from years of experience working with a
        variety of clients through our London based team. *The prices you see
        are for your guide only, please speak to a member of our team for an
        accurate quote based on your requirements.
      </p>
      <Link to="/need-branding">
        <Button onClick={forwardAnime}>
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          Let's Start
        </Button>
      </Link>
    </motion.div>
  );
};

export default LetsStart;
