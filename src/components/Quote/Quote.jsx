import React from "react";
// Components
import QuoteListing from "../QuoteListing/QuoteListing";
// Styles
import "./Quote.css";

const Quote = ({ totalPrice, storePrices }) => {
  let quoteObject = {};

  // checking the client choices and putting them into new object quoteObject
  for (const key in storePrices) {
    if (key === "Need Branding" && storePrices[key] !== 0) {
      quoteObject["Q2"] = "Standart Branding Package £1,275";
    }

    if (key === "Need business cards" && storePrices[key] !== 0) {
      quoteObject["Q2"] = "Premium Branding Package £2,550";
    }

    if (key === "Need Guidelines" && storePrices[key] !== 0) {
      quoteObject["Q2"] = "Platinum Branding Package £3,400";
    }

    if (key === "You be selling products?" && storePrices[key] === 3500) {
      quoteObject["Q3"] = "+ Basic eCommerce Package £3,500";
    } else if (key === "You be selling products?" && storePrices[key] === 0) {
      quoteObject["Q3"] = "+ Basic Website Package £2,500";
    }

    if (key === "How Many Products" && storePrices[key] === 2500) {
      quoteObject["Q3"] = "+ Premium eCommerce Package £6,000";
    } else if (key === "How Many Products" && storePrices[key] === 6500) {
      quoteObject["Q3"] = "+ Platinum eCommerce Package £10,000";
    }

    if (key === "How Many Pages" && storePrices[key] === 5000) {
      quoteObject["Q3"] = "+ Platinum Website Package £8,000";
    } else if (key === "How Many Pages" && storePrices[key] === 2500) {
      quoteObject["Q3"] = "+ Premium Website Package £4,500";
    }

    if (key === "Q71 Related products" && storePrices[key] !== 0) {
      quoteObject["Q71ad1"] = "+ Related products £195";
    }

    if (key === "Q71 Product reviews" && storePrices[key] !== 0) {
      quoteObject["Q71ad2"] = "+ Product reviews +£260";
    }

    if (key === "Q71 Gift Wrapping" && storePrices[key] !== 0) {
      quoteObject["Q71ad3"] = "+ Gift wrapping +£130";
    }
    if (key === "Q71 Pre-order" && storePrices[key] !== 0) {
      quoteObject["Q71ad4"] = "+ Pre-order +£260";
    }
    if (key === "Q71 Newsletter sign-up" && storePrices[key] !== 0) {
      quoteObject["Q71ad5"] = "+ Newsletter sign-up +£195";
    }
    if (key === "Q71 Customisable product" && storePrices[key] !== 0) {
      quoteObject["Q71ad6"] = "+ Customisable product +£480";
    }
    if (key === "Q71 Custom size guide" && storePrices[key] !== 0) {
      quoteObject["Q71ad7"] = "+ Custom size guide +£260";
    }
    if (key === "Q71 Loyalty programme" && storePrices[key] !== 0) {
      quoteObject["Q71ad8"] = "+ Loyalty programme +£480";
    }
    if (key === "Q71 Live support chat" && storePrices[key] !== 0) {
      quoteObject["Q71ad9"] = "+ Live support chat +£130";
    }
    if (key === "Q71 Wishlist" && storePrices[key] !== 0) {
      quoteObject["Q71ad10"] = "+ Wishlist +£390";
    }
    if (key === "Q71 Currency converter" && storePrices[key] !== 0) {
      quoteObject["Q71ad11"] = "+ Currency converter +£260";
    }
    if (key === "Q71 Subscription service" && storePrices[key] !== 0) {
      quoteObject["Q71ad12"] = "+ Subscription service +£480";
    }
    if (key === "Q71 Product filtering" && storePrices[key] !== 0) {
      quoteObject["Q71ad13"] = "+ Product filtering +£390";
    }
    if (key === "Q72 Photo gallery" && storePrices[key] !== 0) {
      quoteObject["Q72ad1"] = "+ Photo gallery +£130";
    }
    if (key === "Q72 Contact form" && storePrices[key] !== 0) {
      quoteObject["Q72ad2"] = "+ Contact form +£130";
    }
    if (key === "Q72 Newsletter sign-up" && storePrices[key] !== 0) {
      quoteObject["Q72ad3"] = "+ Newsletter sign-up +£195";
    }
    if (key === "Q72 Social media feed" && storePrices[key] !== 0) {
      quoteObject["Q72ad4"] = "+ Social media feed +£130";
    }
    if (key === "Q72 Video content" && storePrices[key] !== 0) {
      quoteObject["Q72ad5"] = "+ Video content £130";
    }
    if (key === "Q72 Live support chat" && storePrices[key] !== 0) {
      quoteObject["Q72ad6"] = "+ Live support chat +£130";
    }
    if (key === "Q72 Age gate" && storePrices[key] !== 0) {
      quoteObject["Q72ad7"] = "+ Age gate +£195";
    }
    if (key === "Q72 Event calendar" && storePrices[key] !== 0) {
      quoteObject["Q72ad8"] = "+ Event calendar +£480";
    }
    if (key === "Q72 File sharing" && storePrices[key] !== 0) {
      quoteObject["Q72ad9"] = "+ File sharing +£480";
    }
    if (key === "Q72 Branded Google Map" && storePrices[key] !== 0) {
      quoteObject["Q72ad10"] = "+ Branded Google Map +£130";
    }
    if (key === "Q72 Booking schedule" && storePrices[key] !== 0) {
      quoteObject["Q72ad11"] = "+ Booking schedule +£480";
    }
  }

  let quoteListArr = [];

  // extracting only values from the new object quoteObject and putting them into new arr quoteListArr
  for (const [key, value] of Object.entries(quoteObject)) {
    quoteListArr.push(value);
  }

  return (
    <div className="quote">
      <div className="quote-title">
        <h2>Quote</h2>
        <hr />
      </div>

      <div className="quoteArr">
        {/* iterating through the new arr and displaying the values */}
        {quoteListArr.map((el) => (
          <QuoteListing name={el} />
        ))}
      </div>

      <div className="quote-total">
        <hr />
        <div className="quote-total-inner">
          <h2>Total</h2>
          <p className="quote-total-price">£{totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
