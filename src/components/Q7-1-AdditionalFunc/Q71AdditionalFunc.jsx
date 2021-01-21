import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./Q71AdditionalFunc.scss";
import { Button, QuestionTitle } from "../../globalStyling";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const Q71AdditionalFunc = () => {
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
        <ul class="ks-cboxtags">
          <li>
            <input type="checkbox" id="checkboxOne" value="Rainbow Dash" />
            <label for="checkboxOne">Rainbow Dash</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTwo" value="Cotton Candy" />
            <label for="checkboxTwo">Cotton Candy</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxThree" value="Rarity" />
            <label for="checkboxThree">Rarity</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFour" value="Moondancer" />
            <label for="checkboxFour">Moondancer</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFive" value="Surprise" />
            <label for="checkboxFive">Surprise</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSix" value="Twilight Sparkle" />
            <label for="checkboxSix">Twilight Sparkle</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxSeven" value="Fluttershy" />
            <label for="checkboxSeven">Fluttershy</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxEight" value="Derpy Hooves" />
            <label for="checkboxEight">Derpy Hooves</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxNine"
              value="Princess Celestia"
            />
            <label for="checkboxNine">Princess Celestia</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTen" value="Gusty" />
            <label for="checkboxTen">Gusty</label>
          </li>
          <li class="ks-selected">
            <input type="checkbox" id="checkboxEleven" value="Discord" />
            <label for="checkboxEleven">Discord</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxTwelve" value="Clover" />
            <label for="checkboxTwelve">Clover</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="checkboxThirteen"
              value="Baby Moondancer"
            />
            <label for="checkboxThirteen">Baby Moondancer</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFourteen" value="Medley" />
            <label for="checkboxFourteen">Medley</label>
          </li>
          <li>
            <input type="checkbox" id="checkboxFifteen" value="Firefly" />
            <label for="checkboxFifteen">Firefly</label>
          </li>
        </ul>
      </div>

      <Link to="/contacts-and-details">
        <Button>Continue</Button>
      </Link>
    </motion.div>
  );
};

export default Q71AdditionalFunc;
