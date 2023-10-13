import classes from "./CurrencyItem.module.scss";
///
import Button from "../../../UI/Button/Button";
import { ReactComponent as TriangleDown } from "../../../../assets/triangle-down.svg";
import { ReactComponent as TriangleUp } from "../../../../assets/triangle-up.svg";
///
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
///
import coinData from "../../../../models/coinData";

const CurrencyItem: React.FC<{ item: coinData }> = (props) => {
  // *TODO*
  // Move up or manage as state to avoid unnessesary calculations on each item
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const resizeWindowHandler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindowHandler);
    //
    // return () => {
    //   window.removeEventListener("resize", resizeWindowHandler);
    // };
  });

  const formatPrice = (num: number) => {
    const convertNum = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(Number(num));
    return convertNum;
  };

  const formatProcent = (num: number) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const formatMarketCap = (num: number) => {
    if (width < breakpoint) {
      const convertNum = num / 1000_000_000;
      return convertNum.toFixed(2) + "B";
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
          <img
            className={classes.currencyImage}
            src={`https://assets.coincap.io/assets/icons/${props.item.symbol.toLocaleLowerCase()}@2x.png`}
            alt={props.item.id}
          ></img>
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
