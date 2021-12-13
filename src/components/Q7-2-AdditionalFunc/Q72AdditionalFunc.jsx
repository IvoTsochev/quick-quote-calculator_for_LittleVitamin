import React from "react";
import { Link } from "react-router-dom";
// Helpers
import { prices } from '../../helpers/prices'
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
      className="q72-additional-func page"
      variants={ pageAnimation }
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
          <li style={ storePrices['Q72 Photo gallery'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Photo_gallery }
              name={ "Q72 Photo gallery" }
              label={ "Photo gallery +£170" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Newsletter sign-up'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Newsletter_sign_up }
              name={ "Q72 Newsletter sign-up" }
              label={ "Newsletter sign-up +£170" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Video content'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Video_content }
              name={ "Q72 Video content" }
              label={ "Video content £255" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Age gate'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Age_gate }
              name={ "Q72 Age gate" }
              label={ "Age gate +£255" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 File sharing'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_File_sharing }
              name={ "Q72 File sharing" }
              label={ "File sharing +£340" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Booking schedule'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Booking_schedule }
              name={ "Q72 Booking schedule" }
              label={ "Booking schedule +£510" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Contact form'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Contact_form }
              name={ "Q72 Contact form" }
              label={ "Contact form +£170" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Social media feed'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Social_media_feed }
              name={ "Q72 Social media feed" }
              label={ "Social media feed +£170" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Live support chat'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Live_support_chat }
              name={ "Q72 Live support chat" }
              label={ "Live support chat +£170" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Event calendar'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Event_calendar }
              name={ "Q72 Event calendar" }
              label={ "Event calendar +£510" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
          <li style={ storePrices['Q72 Branded Google Map'] ? { opacity: '50%' } : { opacity: '100%' } }>
            <SingleCheckBtn
              price={ prices.Q72_Branded_Google_Map }
              name={ "Q72 Branded Google Map" }
              label={ "Branded Google Map +£170" }
              storePrices={ storePrices }
              setStorePrices={ setStorePrices }
            />
          </li>
        </ul>
      </div>

      <Link to="/contacts-and-details">
        <Button onClick={ forwardAnime }>
          <FontAwesomeIcon className="btn-arrow" icon={ faArrowAltCircleRight } />{ " " }
          Next step
        </Button>
      </Link>
    </motion.div>
  );
};

export default Q72AdditionalFunc;
