import classes from "./MainLayout.module.scss";
///
import CartPreview from "../Cart/CartPreview/CartPreview";
import Search from "../../UI/Search/Search";
import CurrencyList from "../Currencies/CurrencyList/CurrencyList";
import Pagination from "../Pagination/Pagination";
///
import coinData from "../../../models/coinData";

///
import { useEffect } from "react";
import { useState } from "react";

let isInitial = true;

const MainLayout = () => {
  const [coins, setCoins] = useState<any>([]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const fetchCoins = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets?limit=10");
      const data = await res.json();
      setCoins(data.data);
    };
    fetchCoins();
  }, []);

  const coinsData = coins.map(
    (coin: coinData) =>
      new coinData(
        coin.id,
        coin.name,
        coin.priceUsd,
        coin.changePercent24Hr,
        coin.marketCapUsd,
        coin.symbol
      )
  );

  return (
    <>
      <main className={classes.main}>
        <div className={classes.hero}>
          <h1>Criptomarket</h1>
          <CartPreview />
        </div>
        <Search />
        <CurrencyList items={coinsData} />
        <Pagination />
      </main>
    </>
  );
};
export default MainLayout;
