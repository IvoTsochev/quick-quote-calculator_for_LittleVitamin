import React from "react";
import { Link } from "react-router-dom";
import { prices } from '../../helpers/prices';
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
              price={prices.Q71_Related_products}
              name={"Q71 Related products"}
              label={"Related products - £340+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={prices.Q71_Live_support_chat}
              name={"Q71 Live support chat"}
              label={"Live support chat - £255+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={prices.Q71_Loyalty_programme}
              name={"Q71 Loyalty programme"}
              label={"Loyalty programme - £680+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={prices.Q71_Wishlist}
              name={"Q71 Wishlist"}
              label={"Wishlist - £510+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={prices.Q71_Product_reviews}
              name={"Q71 Product reviews"}
              label={"Product reviews - £340+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={prices.Q71_Custom_size_guide}
              name={"Q71 Custom size guide"}
              label={"Custom size guide - £260+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={prices.Q71_Product_filtering}
              name={"Q71 Advanced Product filtering"}
              label={"Advanced Product filtering - £510+vat"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>
          <li>
            <SingleCheckBtn
              price={prices.Q71_Subscription_service}
              name={"Q71 Subscription model"}
              label={"Subscription model - £poa"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>


          <li>
            <SingleCheckBtn
              price={prices.Q71_Subscription_Flow}
              name={"Q71 Subscription Flow"}
              label={"Subscription Flow - £poa"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={prices.Q71_Marketplace}
              name={"Q71 Marketplace"}
              label={"Marketplace - £poa"}
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </li>

          <li>
            <SingleCheckBtn
              price={prices.Q71_Other_features}
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
