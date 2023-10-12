import classes from "./CurrencyItem.module.scss";
///
import Button from "../../../UI/Button/Button";
///
import React from "react";
import coinData from "../../../../models/coinData";
import { ReactComponent as TriangleDown } from "../../../../assets/triangle-down.svg";
import { ReactComponent as TriangleUp } from "../../../../assets/triangle-up.svg";
///

const CurrencyItem: React.FC<{ item: coinData }> = (props) => {
  const formatPrice = (num: number) => {
    if (Math.abs(num) < 0.0) {
      return "no data";
    } else {
      const convertNum = new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
      }).format(Number(num));
      return convertNum;
    }
  };

  const formatProcent = (num: number) => {
    if (Math.abs(num) < 0.0) {
      return "no data";
    } else {
      return num.toFixed(2);
    }
  };

  const formatMarketCap = (num: number) => {
    if (Math.abs(num) < 0.0) {
      return "no data";
    } else {
      const cutDecimals = Math.round(num);
      const convertNum = new Intl.NumberFormat("en-EN").format(cutDecimals);
      return convertNum;
    }
  };

  return (
    <tr className={classes.tableRow}>
      <th>
        <div className={classes.nameGroup}>
          <span>{props.item.id}</span>
          <span className={classes.tableRow__symbol}>{props.item.symbol}</span>
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
            <TriangleUp className={classes.triangle} />
          ) : (
            <TriangleDown className={classes.triangle} />
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
