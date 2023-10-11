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
  const [coins, setCoins] = useState<coinData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const moveNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const movePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const moveTo = (num: number) => {
    setCurrentPage(num);
  };

  let offset = currentPage * 10;

  // "https://api.coincap.io/v2/assets?limit=10&offset=10"
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const fetchCoins = async () => {
      const res = await fetch(
        `https://api.coincap.io/v2/assets?limit=10&offset=${offset}`
      );
      const data = await res.json();
      setCoins(data.data);
      console.log(data.data);
    };
    fetchCoins();
  }, [offset]);

  const coinsData = coins.map(
    (coin: coinData) =>
      new coinData(
        coin.id,
        coin.name,
        coin.priceUsd,
        coin.changePercent24Hr,
        coin.marketCapUsd,
        coin.symbol,
        coin.rank
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
        <Pagination
          onClickNext={moveNext}
          onClickPrev={movePrev}
          onClickPage={moveTo}
          page={currentPage}
        />
      </main>
    </>
  );
};
export default MainLayout;
