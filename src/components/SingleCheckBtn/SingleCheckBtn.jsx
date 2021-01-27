import React, { useState } from "react";
// Styles
import { Button } from "../../globalStyling";
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

  let handleClick = () => {
    setIsClied((prev) => !prev);
    let storeDes = { ...storePrices };
    console.log(storeDes);
    if (isClicked) {
      console.log(isClicked);
      storeDes[name] = Number(price);
    } else {
      console.log(isClicked);
      storeDes[name] = Number(0);
    }
    setStorePrices(storeDes);
  };

  return (
    <div className="single-check-btn">
      <Button onClick={handleClick}>{label}</Button>
    </div>
  );
};

export default SingleCheckBtn;
