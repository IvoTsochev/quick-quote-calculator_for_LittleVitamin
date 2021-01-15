import "./App.scss";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
// Components
import Q1LetsStart from "./components/Q1LetsStart/Q1LetsStart";
import Q2NeedBranding from "./components/Q2NeedBranding/Q2NeedBranding";
import Q3NeedBusCards from "./components/Q3NeedBusCards/Q3NeedBusCards";
import Q4NeedGuidelines from "./components/Q4NeedGuidelines/Q4NeedGuidelines";
import Q5SellingProducts from "./components/Q5SellingProducts/Q5SellingProducts";

function App() {
  // STATE
  // total price
  const [totalPrice, setTotalPrice] = useState(0);
  // questions

  return (
    <div className="app">
      <div className="app-main">
        <Switch>
          <Route path="/" exact>
            <Q1LetsStart />
          </Route>

          <Route path="/need-branding">
            <Q2NeedBranding />
          </Route>

          <Route path="/need-business-cards">
            <Q3NeedBusCards />
          </Route>

          <Route path="/need-guidelines">
            <Q4NeedGuidelines />
          </Route>

          <Route path="/selling-products">
            <Q5SellingProducts />
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
