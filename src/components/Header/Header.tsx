import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <span className={classes.currencyName}>Bitcoin</span>
          <span className={classes.currencyValue}>$20,000.00</span>
        </li>
        <li>
          <span className={classes.currencyName}>Bitcoin</span>
          <span className={classes.currencyValue}>$20,000.00</span>
        </li>
        <li>
          <span className={classes.currencyName}>Bitcoin</span>
          <span className={classes.currencyValue}>$20,000.00</span>
        </li>
      </ul>
    </header>
  );
};
export default Header;
