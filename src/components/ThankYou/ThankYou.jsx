import React from 'react'
// Styles
import './ThankYou.scss'
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const ThankYou = () => {
    return (
        <motion.div
            className="contacts-and-details"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <h2>Thank you for your time!</h2>
            <br />
            <h2>We'll get back to you as soon as possible.</h2>

            {/* Klaviyo snippet FORM */}
            <div className="klaviyo-form-UijHwS"
            ></div>
            {/* END Klaviyo snippet FORM */}
        </motion.div>
    )
}


export default ThankYou;
