import { pageAnimation } from "./animation";

// moving the animation forward after clicking on buttons
export const forwardAnime = () => {
  pageAnimation.hidden.y = "-150%";
  pageAnimation.exit.y = "150%";
};
