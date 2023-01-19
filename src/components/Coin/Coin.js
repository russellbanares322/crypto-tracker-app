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
    const check = localStorage.getItem("coin");

    if (check) {
      setCoinData(JSON.parse(check));
    } else {
      setIsLoading(true);
      await axios
        .get(
          `${REACT_APP_COIN_API}/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`
        )
        .then((res) => {
          localStorage.setItem("coin", JSON.stringify(res.data));
          setCoinData(res.data);
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [currency]);
  return (
    <>
      <DisplayCoin data={coinData} isLoading={isLoading} />
    </>
  );
};

export default Coin;
