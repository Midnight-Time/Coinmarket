import classes from "./CurrencyItem.module.scss";
///
import Button from "../../../UI/Button/Button";
///
import React from "react";
import coinData from "../../../../models/coinData";
///

const CurrencyItem: React.FC<{ item: coinData }> = (props) => {
  const formatPrice = (num: number) => {
    const convertNum = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(Number(num));
    return convertNum;
  };

  const formatProcent = (num: number) => {
    return num.toFixed(2);
  };

  const formatMarketCap = (num: number) => {
    const cutDecimals = Math.round(num);
    const convertNum = new Intl.NumberFormat("en-EN").format(cutDecimals);
    return convertNum;
  };

  return (
    <tr className={classes.tableRow}>
      <th>
        <div>
          <span>{props.item.id}</span>
          <span>{props.item.symbol}</span>
        </div>
      </th>
      <td>
        <div>{formatPrice(props.item.priceUsd)}</div>
      </td>
      <td>
        <div
          className={`${
            props.item.changePercent24Hr > 0
              ? classes.priceUp
              : classes.priceDown
          }`}
        >
          {props.item.changePercent24Hr > 0 ? (
            <span>&#9650;</span>
          ) : (
            <span>&#9660;</span>
          )}

          <span>{formatProcent(props.item.changePercent24Hr)}%</span>
        </div>
      </td>
      <td>
        <div>${formatMarketCap(props.item.marketCapUsd)}</div>
      </td>
      <td>
        <div>
          <Button className={classes.btn}>Add</Button>
        </div>
      </td>
    </tr>
  );
};
export default CurrencyItem;
