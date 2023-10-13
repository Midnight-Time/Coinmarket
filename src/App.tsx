// import { useEffect } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { useState } from "react";
///
import coinData from "./models/coinData";

let isInitial = true;

function App() {
  const [coins, setCoins] = useState<coinData[]>([]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const fetchCoins = async () => {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=10`);
      const data = await res.json();
      setCoins(data.data);
    };
    fetchCoins();
  }, []);
  console.log(coins);

  return (
    <div className="app">
      <HomePage coins={coins} />
    </div>
  );
}

export default App;
