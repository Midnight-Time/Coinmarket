import classes from "./CurrencyList.module.scss";
///
import CurrencyItem from "../CurrencyItem/CurrencyItem";
///
import React from "react";
import { useState } from "react";
///
import coinData from "../../../../models/coinData";

const CurrencyList: React.FC<{ items: coinData[] }> = (props) => {
  const headers: { key: SortKeys; label: string }[] = [
    { key: "priceUsd", label: "Price" },
    { key: "changePercent24Hr", label: "24h %" },
    { key: "marketCapUsd", label: "Market Cap" },
  ];

  const [sortKey, setSortKey] = useState<SortKeys>("rank");
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

  function changeSort(key: SortKeys) {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "des" : "asc");
    }
    setSortKey(key);
  }

  const ArrowDown = () => {
    return <span>&#9660;</span>;
  };
  const ArrowUp = () => {
    return <span>&#9650;</span>;
  };

  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            {headers.map((row) => {
              return (
                <th key={row.key} onClick={() => changeSort(row.key)}>
                  {row.label}
                  {row.key === sortKey && sortOrder === "asc" && <ArrowDown />}
                  {row.key === sortKey && sortOrder === "des" && <ArrowUp />}
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
