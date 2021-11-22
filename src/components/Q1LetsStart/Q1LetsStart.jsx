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
      variants={ pageAnimation }
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>We are website experts specialising in Shopify eCommerce and Wordpress platforms.</QuestionTitle>
      <p>
        Our understanding of the design and website development process comes from years of experience working with a variety of clients and industries. Our quick quote tool is a project price guidance only, and one of our consultants will we in touch soon to advise on an appropriate budget for your unique project. As a guide, our projects generally start at £10k, depending on complexity.
      </p>
      <Link to="/need-branding" className='btn'>
        <Button onClick={ forwardAnime }>
          <FontAwesomeIcon className="btn-arrow" icon={ faArrowAltCircleRight } />{ " " }
          Let's Start
        </Button>
      </Link>
    </motion.div>
  );
};

export default LetsStart;
