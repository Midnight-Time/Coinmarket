import classes from "./MainLayout.module.scss";
///
import CartPreview from "../Cart/CartPreview/CartPreview";
import Search from "../../UI/Search/Search";
import CurrencyList from "../Currencies/CurrencyList/CurrencyList";
import Pagination from "../Pagination/Pagination";

const MainLayout = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.hero}>
          <h1>Criptomarket</h1>
          <CartPreview />
        </div>
        <Search />
        <CurrencyList />
        <Pagination />
      </main>
    </>
  );
};
export default MainLayout;
