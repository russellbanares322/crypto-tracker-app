import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DisplayCoin from "./DisplayCoin";
import CoinContext from "../context/CoinContext";
const Coin = () => {
  const { REACT_APP_COIN_API } = process.env;
  const [isLoading, setIsLoading] = useState(false);
  const [coinData, setCoinData] = useState([]);

  const { currency } = useContext(CoinContext);

  //Fetching of Cryptocurrency data
  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(
        `${REACT_APP_COIN_API}/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`
      )
      .then((res) => {
        setCoinData(res.data);
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [currency]);
  return (
    <>
      <DisplayCoin data={coinData} isLoading={isLoading} />
    </>
  );
};

export default Coin;
