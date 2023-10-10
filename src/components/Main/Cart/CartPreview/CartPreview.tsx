import classes from "./CartPreview.module.scss";

const CartPreview = () => {
  return (
    <div className={classes.cart}>
      <div className={classes.cart__container}>
        <span>Image</span>
        <h2>Your coins</h2>
      </div>
      <div className={classes.cart__total}>134,32USD + 2,38 (1,80%)</div>
    </div>
  );
};
export default CartPreview;
