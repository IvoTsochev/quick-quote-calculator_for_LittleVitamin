import "./App.scss";
import { useState } from "react";
// Components
import Q1LetsStart from "./components/Q1LetsStart/Q1LetsStart";
import Q2NeedBranding from "./components/Q2NeedBranding/Q2NeedBranding";
import Q3NeedBusCards from "./components/Q3NeedBusCards/Q3NeedBusCards";

function App() {
  // STATE
  // total price
  const [totalPrice, setTotalPrice] = useState(0);
  // questions
  const [q1Visible, setQ1Visible] = useState(true);
  const [q2, setQ2] = useState("");

  console.log(totalPrice);

  return (
    <div className="app">
      <div className="app-main">
        <Q1LetsStart q1Visible={q1Visible} setQ1Visible={setQ1Visible} />

        {!q1Visible ? (
          <Q2NeedBranding
            q2={q2}
            setQ2={setQ2}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        ) : (
          ""
        )}

        {q2 ? <Q3NeedBusCards /> : ""}
      </div>
      <div className="app-calc"></div>
    </div>
  );
}

export default App;
