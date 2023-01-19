import MainLayout from "./components/Main/MainLayout";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import CoinInfo from "./components/Coin/CoinInfo";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import CoinContext from "./components/context/CoinContext";
import { Triangle } from "react-loader-spinner";

const App = () => {
  const { isLoading } = useContext(CoinContext);
  return (
    <>
      {isLoading ? (
        <div className="loader_wrapper">
          <Triangle
            height="130"
            width="130"
            color="#6FD691"
            ariaLabel="triangle-loading"
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "15rem",
            }}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/coin-info/:id" element={<CoinInfo />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
