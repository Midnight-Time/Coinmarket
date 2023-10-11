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
  onClickPage = (num) => {},
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
      <span onClick={showNumberHandler}>{page === 0 ? "..." : page}</span>
      <span onClick={showNumberHandler} className={classes.pageActive}>
        {page === 0 ? "1" : page + 1}{" "}
      </span>
      <span onClick={showNumberHandler}>{page === 0 ? "2" : page + 2}</span>
      <Button className={classes.btnPaging} onClick={nextClickHandler}>
        Next<span>&rarr;</span>
      </Button>
    </div>
  );
};
export default Pagination;
