import classes from "./Search.module.scss";
///
import { useState } from "react";
import { useEffect } from "react";
///
import coinData from "../../../models/coinData";
import { ReactComponent as Logo } from "../../../assets/search.svg";

const Search: React.FC<{
  onFilterSearch: (filteredData: coinData[]) => void;
  onGetSearchResults: (search: string) => void;
}> = ({ onFilterSearch = () => {}, onGetSearchResults = () => {} }) => {
  const [search, setSearch] = useState<string>("");

  const fetchSeachResults = async () => {
    const res = await fetch(`https://api.coincap.io/v2/assets?limit=1000`);
    const data = await res.json();

    const coinsData = data.data.map(
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

    const filteredData = coinsData.filter((item: coinData) => {
      return (
        search &&
        item &&
        item.id &&
        item.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    onFilterSearch(filteredData);
  };

  useEffect(() => {
    fetchSeachResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    onGetSearchResults(e.currentTarget.value);
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
