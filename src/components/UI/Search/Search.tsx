import Button from "../Button/Button";
import classes from "./Search.module.scss";
///
import { useState } from "react";
import { useEffect } from "react";
///
import coinData from "../../../models/coinData";

let isInitial = true;

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [coins, setCoins] = useState<coinData[]>([]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const fetchCoins = async () => {
      const res = await fetch(`https://api.coincap.io/v2/assets`);
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
        coin.symbol,
        coin.rank
      )
  );
  const filteredData = coinsData.filter((item) => {
    return search.toLocaleLowerCase() === ""
      ? item
      : item.id.toLocaleLowerCase().includes(search);
  });
  console.log(filteredData);

  return (
    <div className={classes.searchEl}>
      <div className={`${classes.searchField}`}>
        <span>Img</span>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search by Name..."
        />
      </div>
      <Button className={classes.searchBtn}>Find</Button>
    </div>
  );
};
export default Search;

// ${classes.active}
