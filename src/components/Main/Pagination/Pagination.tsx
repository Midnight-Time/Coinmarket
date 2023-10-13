import classes from "./Pagintaion.module.scss";
import Button from "../../UI/Button/Button";
///

type ChildProps = {
  onClickNext: () => void;
  onClickPrev: () => void;
  onClickPage: (num: number) => void;
  page: number;
};

const Pagination: React.FC<ChildProps> = ({
  onClickNext = () => {},
  onClickPrev = () => {},
  onClickPage = () => {},
  page,
}) => {
  const nextClickHandler = () => {
    onClickNext();
  };
  const prevClickHandler = () => {
    onClickPrev();
  };
  const moveToHandler = (num: number) => {
    onClickPage(num);
  };

  const showNumberHandler = (event: React.MouseEvent<HTMLElement>) => {
    const showPage = event.currentTarget.textContent;
    if (showPage === "...") {
      return;
    }
    const showPageNum = Number(showPage);

    moveToHandler(showPageNum - 1);
  };

  return (
    <div className={classes.pagination}>
      <Button className={classes.btnPaging} onClick={prevClickHandler}>
        <span>&larr;</span>Prev
      </Button>
      <div className={classes.paginationBtns}>
        <button onClick={showNumberHandler} className={classes.pageNum}>
          {page === 0 ? "..." : page}
        </button>
        <button
          onClick={showNumberHandler}
          className={`${classes.pageNum} ${classes.pageActive}`}
        >
          <span>{page === 0 ? "1" : page + 1} </span>
        </button>
        <button onClick={showNumberHandler} className={classes.pageNum}>
          {page === 0 ? "2" : page + 2}
        </button>
      </div>
      <Button className={classes.btnPaging} onClick={nextClickHandler}>
        Next<span>&rarr;</span>
      </Button>
    </div>
  );
};
export default Pagination;
