import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q6ManyPages.css";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q6ManyPages = ({ storePrices, setStorePrices, name }) => {
  // getting the price
  const getPriceHandler = (e) => {
    let priceManyPages = e.target.value;
    storePrices[name] = Number(priceManyPages);
  };
  // END getting the price

  return (
    <motion.div
      className="many-pages page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        How would you gauge the size and complexity of your project?
      </QuestionTitle>
      <p>
        Common pages include Homepage, About us, Our Services, Contact us etc.
        The content can also be arranged into different sections on a single
        page layout.
      </p>
      <Link to="/q72additional-func">
        <Button
          value="7000"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          Standart
        </Button>
        <Button
          value="12000"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          Premium
        </Button>
        <Button
          value="0"
          onClick={(e) => {
            forwardAnime();
            getPriceHandler(e);
          }}
        >
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          Advanced
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q6ManyPages;
