import React, { useState } from "react";
// Styles
import { CheckBtn } from "../../globalStyling";
import "./SingleCheckBtn.scss";

const SingleCheckBtn = ({
  price,
  name,
  label,
  storePrices,
  setStorePrices,
}) => {
  // State
  const [isClicked, setIsClied] = useState(true);

  // if additional functionality is clicked, push the name and price into the main object => storePrices
  let handleClick = () => {
    setIsClied((prev) => !prev);

    let storeDes = { ...storePrices };

    isClicked ? (storeDes[name] = Number(price)) : (storeDes[name] = Number(0));

    setStorePrices(storeDes);
  };

  return (
    <div className="single-check-btn">
      <CheckBtn
        style={isClicked ? { opacity: "100%" } : { opacity: "50%" }}
        onClick={handleClick}
      >
        {label}
      </CheckBtn>
    </div>
  );
};

export default SingleCheckBtn;
