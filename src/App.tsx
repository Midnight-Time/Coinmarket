// import { useEffect } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";

function App() {
  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     const res = await fetch("https://api.coincap.io/v2/assets?limit=20");
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetchCoins();
  // });

  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App;
