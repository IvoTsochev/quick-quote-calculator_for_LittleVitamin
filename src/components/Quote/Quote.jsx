import React from "react";
// Helpers
import { prices } from '../../helpers/prices';
// Components
import QuoteListing from "../QuoteListing/QuoteListing";
// Styles
import "./Quote.css";

const Quote = ({ totalPrice, storePrices }) => {
  let quoteObject = {};

  // checking the client choices and putting them into new object quoteObject
  for (const key in storePrices) {
    if (key === "Need Branding" && storePrices[key] !== 0) {
      quoteObject["Q2"] = "Standard Branding Package £1,275";
    }

    if (key === "Need business cards" && storePrices[key] !== 0) {
      quoteObject["Q2"] = "Premium Branding Package £2,550";
    }

    if (key === "Need a Brand Tool" && storePrices[key] !== 0) {
      quoteObject["Q2"] = "Platinum Branding Package £3,400";
    }

    if (key === "You be selling products?" && storePrices[key] === 8000) {
      quoteObject["Q3"] = `Standard eCommerce Website Package £8,000`;
    } else if (key === "You be selling products?" && storePrices[key] === 0) {
      quoteObject["Q3"] = `Standard Website Package`;
    }

    if (key === "How Many Products" && storePrices[key] === 0) {
      quoteObject["Q3"] = "Standard eCommerce Website Package £8,000";
    } else if (key === "How Many Products" && storePrices[key] === 8000) {
      quoteObject["Q3"] = `Premium eCommerce Website Package £16000`;
    } else if (key === "How Many Products" && storePrices[key] === 16000) {
      quoteObject["Q3"] = `Advanced eCommerce Website Package £24000`;
    } else if (key === "How Many Products" && storePrices[key] === 0) {
      quoteObject["Q3"] = `Advanced eCommerce Website Package £8,000`;
    }

    if (key === "How Many Pages" && storePrices[key] === 7000) {
      quoteObject["Q3"] = `Standard Website Package £7,000`;
    } else if (key === "How Many Pages" && storePrices[key] === 12000) {
      quoteObject["Q3"] = `Premium Website Package £12,000`;
    } else if (key === "How Many Pages" && storePrices[key] === 0) {
      quoteObject["Q3"] = `Advanced Website Package`;
    }

    if (key === "Q71 Related products" && storePrices[key] !== 0) {
      quoteObject["Q71ad1"] = `+ Related products £340`;
    }
    if (key === "Q71 Product reviews" && storePrices[key] !== 0) {
      quoteObject["Q71ad2"] = `+ Product reviews +£${prices.Q71_Product_reviews}`;
    }
    if (key === "Q71 Marketplace" && storePrices[key] !== 0) {
      quoteObject["Q71ad3"] = `+ Marketplace +£0`;
    }
    if (key === "Q71 Subscription Flow" && storePrices[key] !== 0) {
      quoteObject["Q71ad4"] = "+ Subscription Flow +£0";
    }
    if (key === "Q71 Other features" && storePrices[key] !== 0) {
      quoteObject["Q71ad5"] = "+ Other features +£195";
    }
    if (key === "Q71 Customisable product" && storePrices[key] !== 0) {
      quoteObject["Q71ad6"] = "+ Customisable product +£480";
    }
    if (key === "Q71 Custom size guide" && storePrices[key] !== 0) {
      quoteObject["Q71ad7"] = `+ Custom size guide +£${prices.Q71_Custom_size_guide}`;
    }
    if (key === "Q71 Loyalty programme" && storePrices[key] !== 0) {
      quoteObject["Q71ad8"] = `+ Loyalty programme +£${prices.Q71_Loyalty_programme}`;
    }
    if (key === "Q71 Live support chat" && storePrices[key] !== 0) {
      quoteObject["Q71ad9"] = `+ Live support chat +£${prices.Q71_Live_support_chat}`;
    }
    if (key === "Q71 Wishlist" && storePrices[key] !== 0) {
      quoteObject["Q71ad10"] = `+ Wishlist +£${prices.Q71_Wishlist}`;
    }
    if (key === "Q71 Currency converter" && storePrices[key] !== 0) {
      quoteObject["Q71ad11"] = "+ Currency converter +£260";
    }
    if (key === "Q71 Subscription model" && storePrices[key] !== 0) {
      quoteObject["Q71ad12"] = `+ Subscription model +£0`;
    }
    if (key === "Q71 Advanced Product filtering" && storePrices[key] !== 0) {
      quoteObject["Q71ad13"] = `+ Advanced Product filtering +£${prices.Q71_Product_filtering}`;
    }

    if (key === "Q72 Photo gallery" && storePrices[key] !== 0) {
      quoteObject["Q72ad1"] = `+ Photo gallery +£${prices.Q72_Photo_gallery}`;
    }
    if (key === "Q72 Contact form" && storePrices[key] !== 0) {
      quoteObject["Q72ad2"] = `+ Contact form +£${prices.Q72_Contact_form}`;
    }
    if (key === "Q72 Newsletter sign-up" && storePrices[key] !== 0) {
      quoteObject["Q72ad3"] = `+ Newsletter sign-up +£${prices.Q72_Newsletter_sign_up}`;
    }
    if (key === "Q72 Social media feed" && storePrices[key] !== 0) {
      quoteObject["Q72ad4"] = `+ Social media feed +£${prices.Q72_Social_media_feed}`;
    }
    if (key === "Q72 Video content" && storePrices[key] !== 0) {
      quoteObject["Q72ad5"] = `+ Video content £${prices.Q72_Video_content}`;
    }
    if (key === "Q72 Live support chat" && storePrices[key] !== 0) {
      quoteObject["Q72ad6"] = `+ Live support chat +£${prices.Q72_Live_support_chat}`;
    }
    if (key === "Q72 Age gate" && storePrices[key] !== 0) {
      quoteObject["Q72ad7"] = `+ Age gate +£${prices.Q72_Age_gate}`;
    }
    if (key === "Q72 Event calendar" && storePrices[key] !== 0) {
      quoteObject["Q72ad8"] = `+ Event calendar +£${prices.Q72_Event_calendar}`;
    }
    if (key === "Q72 File sharing" && storePrices[key] !== 0) {
      quoteObject["Q72ad9"] = `+ File sharing +£${prices.Q72_File_sharing}`;
    }
    if (key === "Q72 Branded Google Map" && storePrices[key] !== 0) {
      quoteObject["Q72ad10"] = `+ Branded Google Map +£${prices.Q72_Branded_Google_Map}`;
    }
    if (key === "Q72 Booking schedule" && storePrices[key] !== 0) {
      quoteObject["Q72ad11"] = `+ Booking schedule +£${prices.Q72_Booking_schedule}`;
    }
  }

  let quoteListArr = [];

  // extracting only values from the new object quoteObject and putting them into new arr quoteListArr
  for (const [key, value] of Object.entries(quoteObject)) {
    quoteListArr.push(value);
    console.log(key);
  }

  console.log(quoteListArr);

  return (
    <div className="quote">
      <div className="quote-title">
        <h2>Quote</h2>
        <hr />
      </div>

      <div className="quoteArr">
        {/* iterating through the new arr and displaying the values */ }
        { quoteListArr.map((el) => (
          <QuoteListing name={ el } />
        )) }
      </div>

      <div className="quote-total">
        <hr />
        <div className="quote-total-inner">
          <h2>Total</h2>
          <p className="quote-total-price">£{ Math.round(totalPrice) }</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
