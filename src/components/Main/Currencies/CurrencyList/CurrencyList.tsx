import classes from "./CurrencyList.module.scss";
///
import CurrencyItem from "../CurrencyItem/CurrencyItem";
///
import React, { MouseEventHandler } from "react";
import { useState } from "react";
///
import coinData from "../../../../models/coinData";

const CurrencyList: React.FC<{ items: coinData[] }> = (props) => {
  const headers: { key: SortKeys; label: string }[] = [
    { key: "priceUsd", label: "Price" },
    { key: "changePercent24Hr", label: "24h %" },
    { key: "marketCapUsd", label: "Market Cap" },
  ];

  const [sortKey, setSortKey] = useState<SortKeys>("priceUsd");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  type Data = typeof props.items;
  type SortKeys = keyof Data[0];
  type SortOrder = "asc" | "des";

  function sortData({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) {
    if (!sortKey) return tableData;

    const sortedData = [...props.items].sort((a, b) => {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }

    return sortedData;
  }

  const sortedData = () =>
    sortData({
      tableData: [...props.items],
      sortKey,
      reverse: sortOrder === "des",
    });

  function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) {
    return (
      <button
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === "des"
            ? classes.sortBtnReversed
            : classes.sortBtn
        }`}
      >
        &#9650;
      </button>
    );
  }

  function changeSort(key: SortKeys) {
    console.log(key);

    setSortOrder(sortOrder === "asc" ? "des" : "asc");
    setSortKey(key);

    console.log(sortKey);
  }

  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            {headers.map((row) => {
              return (
                <th key={row.key}>
                  {row.label}
                  <SortButton
                    columnKey={row.key}
                    onClick={() => changeSort(row.key)}
                    {...{ sortOrder, sortKey }}
                  />
                </th>
              );
            })}
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {sortedData().map((item) => (
            <CurrencyItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default CurrencyList;
