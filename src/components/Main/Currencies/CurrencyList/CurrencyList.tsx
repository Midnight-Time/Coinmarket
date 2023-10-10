import classes from "./CurrencyList.module.scss";
import CurrencyItem from "../CurrencyItem/CurrencyItem";

const CurrencyList = () => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24h %</th>
          <th>Market Cap</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
       <CurrencyItem/>
      </tbody>
    </table>
  );
};
export default CurrencyList;
