import classes from "./Search.module.scss";
///
import { useState } from "react";
import { useEffect } from "react";
///
import coinData from "../../../models/coinData";
import { ReactComponent as Logo } from "../../../assets/search.svg";

type ChildProps = {
  onSearch: (str: string) => void;
  onFilterSearch: (filteredData: coinData[]) => void;
  searchResults: string;
};

let isInitial = true;

const Search: React.FC<ChildProps> = ({
  onSearch = () => {},
  onFilterSearch = () => {},
  searchResults,
}) => {
  const [coins, setCoins] = useState<coinData[]>([]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (searchResults) {
      const fetchCoins = async () => {
        const res = await fetch(`https://api.coincap.io/v2/assets`);
        const data = await res.json();
        setCoins(data.data);
      };
      fetchCoins();
    }
  }, [searchResults]);

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
    return searchResults.toLocaleLowerCase() === ""
      ? item
      : item.id.toLocaleLowerCase().includes(searchResults);
  });

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    onSearch(e.currentTarget.value);
    onFilterSearch(filteredData);
  };

  return (
    <div className={classes.searchEl}>
      <div className={`${classes.searchField}`}>
        <Logo className={classes.searchLogo} />
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Search by Name..."
        />
      </div>
    </div>
  );
};
export default Search;

// ${classes.active}
