import classes from "./CurrencyItem.module.scss";
///
import Button from "../../../UI/Button/Button";

const CurrencyItem = () => {
  return (
    <tr className={classes.tableRow}>
      <th>
        <div>
          <span>Bitcoin</span>
          <span>BTC</span>
        </div>
      </th>
      <td>
        <div>$27,693.88</div>
      </td>
      <td>
        <div className={classes.priceDown}>
          <span>&#9660;</span>
          <span> 0.69%</span>
        </div>
      </td>
      <td>
        <div className={classes.reflectCahnges}>$540,288,988,422</div>
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
