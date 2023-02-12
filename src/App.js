import MainLayout from "./components/Main/MainLayout";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import CoinContext from "./components/context/CoinContext";
import { Triangle } from "react-loader-spinner";
import DisplaySingleCoin from "./components/Coin/DisplaySingleCoin";

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
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/coin-info/:id" element={<DisplaySingleCoin />} />
          </Routes>
          <footer>Created by Russ 🤟</footer>
        </>
      )}
    </>
  );
};

export default App;
