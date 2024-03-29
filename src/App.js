// Utils
// import handleCursor from './helpers/cursorStyle';
import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
// Helpers
import { initializeGoogleAnalytics } from "./helpers/googleInitialize";
// Styles
import "./App.css";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Animation
import { AnimatePresence } from "framer-motion";
import { pageAnimation } from "./animation";

// Components
import Q1LetsStart from "./components/Q1LetsStart/Q1LetsStart";
import Q2NeedBranding from "./components/Q2NeedBranding/Q2NeedBranding";
import Q3NeedBusCards from "./components/Q3NeedBusCards/Q3NeedBusCards";
import Q4NeedGuidelines from "./components/Q4NeedGuidelines/Q4NeedGuidelines";
import Q5SellingProducts from "./components/Q5SellingProducts/Q5SellingProducts";
import Q6ManyProducts from "./components/Q6-1-ManyProducts/Q6ManyProducts";
import Q6ManyPages from "./components/Q6-2-ManyPages/Q6ManyPages";
import Q71AdditionalFunc from "./components/Q7-1-AdditionalFunc/Q71AdditionalFunc";
import Q72AdditionalFunc from "./components/Q7-2-AdditionalFunc/Q72AdditionalFunc";
import Q8ContactAndDetails from "./components/Q8ContactsAndDetails/Q8ContactAndDetails";
import Quote from "./components/Quote/Quote";
import videoBg from "./img/LV-AN01-sonic-ident-1280x720-1.mp4";
import ThankYou from './components/ThankYou/ThankYou';
import pill_logo from './img/White-Pill_Square.png';


function App () {


  let location = useLocation();


  let lastPage = false;
  if (location.pathname === '/thankyou') {
    lastPage = true;
  }

  let contactPage = false;
  if (location.pathname === '/contacts-and-details') {
    contactPage = true;
  }


  // STATE
  const [totalPrice, setTotalPrice] = useState(0);
  const [storePrices, setStorePrices] = useState({});

  // Google Analytics
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);


  // suming the total price from storePrices object
  let sumAllArr = Object.values(storePrices);
  let sum = 0;
  sumAllArr.forEach((el) => {
    sum = sum + Number(el);
  });
  useEffect(() => {
    setTotalPrice(sum);
  }, [sum, setTotalPrice, storePrices]);

  // END suming the total price from storePrices object

  // handling the GoBack and Forward animation
  let goBackHandler = () => {
    window.history.back();
    pageAnimation.exit.y = "150%";
    pageAnimation.hidden.y = "-150%";
  };

  let goForwardHandler = () => {
    window.history.forward();
    pageAnimation.exit.y = "-150%";
    pageAnimation.hidden.y = "150%";
  };
  // END handling the GoBack and Forward animation

  return (
    <div className={ `app ${contactPage ? 'mobile-app' : ''}` }>
      <a href='https://vitamincommerce.com'>
        <img className='pill-logo' src={ pill_logo } alt="White-Pill_Square" />
      </a>
      <video className="videoBg" autoPlay loop muted>
        <source src={ videoBg } type="video/mp4" />
      </video>
      {/* Main area */ }
      <div className="app-main">

        <AnimatePresence exitBeforeEnter>
          <Switch location={ location } key={ location.pathname }>


            <Route path="/" exact>
              <Q1LetsStart />
            </Route>


            <Route path="/need-branding">
              <Q2NeedBranding
                storePrices={ storePrices }
                setStorePrices={ setStorePrices }
                name={ "Need Branding" }
              />
            </Route>

            <Route path="/need-business-cards">
              <Q3NeedBusCards
                storePrices={ storePrices }
                setStorePrices={ setStorePrices }
                name={ "Need business cards" }
              />
            </Route>

            <Route path="/need-guidelines">
              <Q4NeedGuidelines
                storePrices={ storePrices }
                setStorePrices={ setStorePrices }
                name={ "Need a Brand Tool" }
              />
            </Route>

            <Route path="/selling-products">
              <Q5SellingProducts
                storePrices={ storePrices }
                setStorePrices={ setStorePrices }
                name={ "You be selling products?" }
              />
            </Route>

            <Route path="/many-products">
              <Q6ManyProducts
                storePrices={ storePrices }
                setStorePrices={ setStorePrices }
                name={ "How Many Products" }
              />
            </Route>

            <Route path="/many-pages">
              <Q6ManyPages
                storePrices={ storePrices }
                setStorePrices={ setStorePrices }
                name={ "How Many Pages" }
              />
            </Route>

            <Route path="/q71additional-func">
              <Q71AdditionalFunc
                storePrices={ storePrices }
                setStorePrices={ setStorePrices }
              />
            </Route>

            <Route path="/q72additional-func">
              <Q72AdditionalFunc
                storePrices={ storePrices }
                setStorePrices={ setStorePrices }
              />
            </Route>

            <Route path="/contacts-and-details">
              <Q8ContactAndDetails storePrices={ storePrices } />
            </Route>

            <Route path='/thankyou'>
              <ThankYou storePrices={ storePrices } />
            </Route>



          </Switch>
        </AnimatePresence>
      </div>
      {/* END Main area */ }

      {/* Calc area */ }
      <div className="app-calc">
        <FontAwesomeIcon
          onClick={ goBackHandler }
          className="goBack-btn-arrow"
          icon={ faArrowUp }
        />
        <FontAwesomeIcon
          onClick={ goForwardHandler }
          className={ `goForward-btn-arrow ${lastPage ? 'hideArrow' : ''}` }
          icon={ faArrowDown }
        />

        <div className="app-calc-stats" id={ `${contactPage ? 'showCalcArea' : ''}` }>
          <Quote totalPrice={ totalPrice } storePrices={ storePrices } />
        </div>
      </div>
      {/* END Calc area */ }

    </div>
  );
}

export default App;
