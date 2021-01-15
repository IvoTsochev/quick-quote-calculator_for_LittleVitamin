import "./App.scss";
import { useState } from "react";
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
  const [q1Visible, setQ1Visible] = useState(true);
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");

  console.log(totalPrice);

  // Q2 check the answer and render component based on the answer
  let businessCardsOrSellingProducts = () => {
    if (q2 === "YES, I NEED BRANDING") {
      return (
        <Q3NeedBusCards
          q3={q3}
          setQ3={setQ3}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      );
    } else if (q2 === "NO, I HAVE MY OWN BRANDING") {
      return <Q5SellingProducts />;
    }
  };

  return (
    <div className="app">
      <div className="app-main">
        {/* question 1 */}
        <Q1LetsStart q1Visible={q1Visible} setQ1Visible={setQ1Visible} />

        {/* question 2 */}
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

        {/* question 3 */}
        {businessCardsOrSellingProducts()}

        {/* question 4 */}
        {q3 ? (
          <Q4NeedGuidelines
            q4={q4}
            setQ4={setQ4}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        ) : (
          ""
        )}

        {q4 ? <Q5SellingProducts /> : ""}
      </div>
      <div className="app-calc"></div>
    </div>
  );
}

export default App;
