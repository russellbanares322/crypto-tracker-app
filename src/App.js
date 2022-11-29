import MainLayout from "./components/Main/MainLayout";
import "./App.css";
import CoinInfo from "./components/Coin/CoinInfo";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/coin-info/:id" element={<CoinInfo />} />
      </Routes>
    </>
  );
};

export default App;
