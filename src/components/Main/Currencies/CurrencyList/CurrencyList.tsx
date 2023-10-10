import classes from "./CurrencyList.module.scss";
///
import CurrencyItem from "../CurrencyItem/CurrencyItem";
///
import React from "react";
///
import coinData from "../../../../models/coinData";

const CurrencyList: React.FC<{ items: coinData[] }> = (props) => {
  return (
    <>
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
          {props.items.map((item) => (
            <CurrencyItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default CurrencyList;
