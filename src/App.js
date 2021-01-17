import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// Styles
import "./App.scss";
// Components
import Q1LetsStart from "./components/Q1LetsStart/Q1LetsStart";
import Q2NeedBranding from "./components/Q2NeedBranding/Q2NeedBranding";
import Q3NeedBusCards from "./components/Q3NeedBusCards/Q3NeedBusCards";
import Q4NeedGuidelines from "./components/Q4NeedGuidelines/Q4NeedGuidelines";
import Q5SellingProducts from "./components/Q5SellingProducts/Q5SellingProducts";
import Q6ManyProducts from "./components/Q6-1-ManyProducts/Q6ManyProducts";
import Q6ManyPages from "./components/Q6-2-ManyPages/Q6ManyPages";

function App() {
  // STATE
  const [totalPrice, setTotalPrice] = useState(0);
  const [storePrices, setStorePrices] = useState({
    NeedBranding: "",
    NeedBusCards: "",
    NeedGuidelines: "",
    SellingProducts: "",
    ManyProducts: "",
  });

  return (
    <div className="app">
      <div className="app-main">
        <Switch>
          <Route path="/" exact>
            <Q1LetsStart />
          </Route>

          <Route path="/need-branding">
            <Q2NeedBranding
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </Route>

          <Route path="/need-business-cards">
            <Q3NeedBusCards
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </Route>

          <Route path="/need-guidelines">
            <Q4NeedGuidelines
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </Route>

          <Route path="/selling-products">
            <Q5SellingProducts
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </Route>

          <Route path="/many-products">
            <Q6ManyProducts
              storePrices={storePrices}
              setStorePrices={setStorePrices}
            />
          </Route>

          <Route path="/many-pages">
            <Q6ManyPages />
          </Route>
        </Switch>
      </div>
      <div className="app-calc">
        <p>Estimated Total</p>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
}

export default App;
