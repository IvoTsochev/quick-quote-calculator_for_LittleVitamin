import React from "react";
import { Link } from "react-router-dom";
// Components
import SingleCheckBtn from "../SingleCheckBtn/SingleCheckBtn";
// Styles
import "./Q71AdditionalFunc.css";
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
      className="q71-additional-func page"
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
              price={340}
              name={"Q71 Related products"}
              label={"Related products - £340+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={255}
              name={"Q71 Live support chat"}
              label={"Live support chat - £255+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={680}
              name={"Q71 Loyalty programme"}
              label={"Loyalty programme - £680+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={510}
              name={"Q71 Wishlist"}
              label={"Wishlist - £510+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={340}
              name={"Q71 Product reviews"}
              label={"Product reviews - £340+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={260}
              name={"Q71 Custom size guide"}
              label={"Custom size guide - £260+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={510}
              name={"Q71 Product filtering"}
              label={"Advanced Product filtering - £510+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={0}
              name={"Q71 Subscription service"}
              label={"Subscription model - £poa"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>


          <li>
            <SingleCheckBtn
              price={0}
              name={"Q71 Subscription Flow"}
              label={"Subscription Flow - £poa"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={0}
              name={"Q71 Marketplace"}
              label={"Marketplace - £poa"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={0}
              name={"Q71 Other features"}
              label={"Other features not listed."}
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
