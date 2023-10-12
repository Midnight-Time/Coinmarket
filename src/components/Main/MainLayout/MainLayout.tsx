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
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<coinData[]>([]);
  // console.log(searchResults);

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

  const setSearchData = (str: string) => {
    setSearch(str);
  };
  const reseiveSearchResults = (filteredData: coinData[]) => {
    setSearchResults(filteredData);
  };

  return (
    <>
      <main className={classes.main}>
        <div className={classes.hero}>
          <h1>Criptomarket</h1>
          <CartPreview />
        </div>
        <Search
          onSearch={setSearchData}
          searchResults={search}
          onFilterSearch={reseiveSearchResults}
        />
        {search ? (
          <CurrencyList items={searchResults} />
        ) : (
          <CurrencyList items={coinsData} />
        )}
        {/* <CurrencyList items={coinsData} /> */}
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
