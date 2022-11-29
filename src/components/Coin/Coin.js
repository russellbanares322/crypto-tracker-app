import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayCoin from "./DisplayCoin";
const Coin = () => {
  const { REACT_APP_COIN_API } = process.env;
  const [isLoading, setIsLoading] = useState(false);
  const [coinData, setCoinData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(REACT_APP_COIN_API)
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
  }, []);
  return (
    <>
      <DisplayCoin data={coinData} isLoading={isLoading} />
    </>
  );
};

export default Coin;
