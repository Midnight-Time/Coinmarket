// import Header from "../components/Header/Header";
import MainLayout from "../components/Main/MainLayout/MainLayout";
///
import coinData from "../models/coinData";

const HomePage: React.FC<{ coins: coinData[] }> = (props) => {
  return (
    <>
      {/* <Header /> */}
      <MainLayout coins={props.coins} />
    </>
  );
};
export default HomePage;
