import { pageAnimation } from "./animation";

// moving the animation forward after clicking on buttons
export const forwardAnime = () => {
  pageAnimation.exit.y = "-150%";
  pageAnimation.hidden.y = "150%";
};

export const getPriceHandler = (e) => {
  let price = e.target.value;
  console.log(price);
};
