import React, { useState, useEffect } from 'react'
// Styles
import './ThankYou.css'
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const ThankYou = ({ storePrices }) => {
  const [isEcommerce, setIsEcommerce] = useState(false);


  let websiteThankYouMsg = <h2>Our consultants will be in touch shortly. As you've selected one of our bespoke design and development packages, why don't you have a look at our specialised websites portfolio? Go on <a href='https://vitamincommerce.com/portfolio'>Our Work page</a></h2>

  let eCommerceThankYouMsg = <h2>Our consultants will be in touch shortly. As you've selected that you're willing to sell products online, why don't you have a look at our specialised websites portfolio? Go on <a href='https://vitamincommerce.com/portfolio'>Our Work page</a></h2>




  useEffect(() => {
    if (storePrices['You be selling products?'] === 0) {
      setIsEcommerce(true);
    } else {
      setIsEcommerce(false);
    }
  }, [])

  return (
    <motion.div
      className="contacts-and-details"
      variants={ pageAnimation }
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Thank you for letting us know about your upcoming project.</h2>
      <br />
      { isEcommerce ? websiteThankYouMsg : eCommerceThankYouMsg }

      {/* Klaviyo snippet FORM */ }
      <div className="klaviyo-form-UijHwS"
      ></div>
      {/* END Klaviyo snippet FORM */ }
    </motion.div>
  )
}


export default ThankYou;
