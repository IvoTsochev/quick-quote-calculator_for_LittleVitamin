import React from "react";
import { Link } from "react-router-dom";
// Components
import SingleCheckBtn from "../SingleCheckBtn/SingleCheckBtn";
// Styles
import "./Q71AdditionalFunc.scss";
import { Button, QuestionTitle } from "../../globalStyling";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { forwardAnime } from "../../util";

const Q71AdditionalFunc = ({ storePrices, setStorePrices }) => {
  return (
    <motion.div
      className="q71-additional-func"
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

      <div className="many-products-add">
        <ul className="ks-cboxtags">
          <li>
            <SingleCheckBtn
              price={195}
              name={"Q71 Related products"}
              label={"Related products +£195"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={130}
              name={"Q71 Gift Wrapping"}
              label={"Gift wrapping +£130"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={130}
              name={"Q71 Live support chat"}
              label={"Live support chat +£130"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={480}
              name={"Q71 Loyalty programme"}
              label={"Loyalty programme +£480"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={390}
              name={"Q71 Wishlist"}
              label={"Wishlist +£390"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={260}
              name={"Q71 Currency converter"}
              label={"Currency converter +£260"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={260}
              name={"Q71 Product reviews"}
              label={"Product reviews +£260"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={260}
              name={"Q71 Pre-order"}
              label={"Pre-order +£260"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={195}
              name={"Q71 Newsletter sign-up"}
              label={"Newsletter sign-up +£195"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={480}
              name={"Q71 Customisable product"}
              label={"Customisable product +£480"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={260}
              name={"Q71 Custom size guide"}
              label={"Custom size guide +£260"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={390}
              name={"Q71 Product filtering"}
              label={"Product filtering +£390"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={480}
              name={"Q71 Subscription service"}
              label={"Subscription service +£480"}
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

export default Q71AdditionalFunc;
