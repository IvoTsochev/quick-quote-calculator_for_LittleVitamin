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
            <h1>Thank you for your time!</h1>
            <br />
            <h1>We'll get back to you as soon as possible.</h1>
        </motion.div>
    )
}


export default ThankYou;
