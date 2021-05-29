import React from "react";
import { Link } from "react-router-dom";
// Components
import SingleCheckBtn from "../SingleCheckBtn/SingleCheckBtn";
// Styles
import "./Q72AdditionalFunc.css";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q72AdditionalFunc = ({ storePrices, setStorePrices }) => {
  return (
    <motion.div
      className="q72-additional-func"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <QuestionTitle>
        Are there any additional functionalities you are interested in?
      </QuestionTitle>
      <p>
        Functionality is it's interaction between the site and the site visitor,
        features to enhance your website.
      </p>
      <div className="many-pages-add">
        <ul className="ks-cboxtags">
          <li>
            <SingleCheckBtn
              price={130}
              name={"Q72 Photo gallery"}
              label={"Photo gallery +£130"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={195}
              name={"Q72 Newsletter sign-up"}
              label={"Newsletter sign-up +£195"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={130}
              name={"Q72 Video content"}
              label={"Video content £130"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={195}
              name={"Q72 Age gate"}
              label={"Age gate +£195"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={480}
              name={"Q72 File sharing"}
              label={"File sharing +£480"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={480}
              name={"Q72 Booking schedule"}
              label={"Booking schedule +£480"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={130}
              name={"Q72 Contact form"}
              label={"Contact form +£130"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={130}
              name={"Q72 Social media feed"}
              label={"Social media feed +£130"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={130}
              name={"Q72 Live support chat"}
              label={"Live support chat +£130"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={130}
              name={"Q72 Event calendar"}
              label={"Event calendar +£480"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={130}
              name={"Q72 Branded Google Map"}
              label={"Branded Google Map +£130"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
        </ul>
      </div>

      <Link to="/contacts-and-details">
        <Button onClick={forwardAnime}>
          <FontAwesomeIcon className="btn-arrow" icon={faArrowAltCircleRight} />{" "}
          Next step
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q72AdditionalFunc;
