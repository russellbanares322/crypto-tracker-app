import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisplaySingleCoin from "./DisplaySingleCoin";
import styles from "./styles.module.css";

const CoinInfo = () => {
  const { REACT_APP_SINGLE_COIN_API } = process.env;
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState([]);

  //Fetching of coin info
  const getCoinInfo = async () => {
    await axios
      .get(`${REACT_APP_SINGLE_COIN_API}/${id}`)
      .then((res) => {
        setCoinInfo(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    id && getCoinInfo();
  }, []);
  return (
    <div className={styles.coinInfoBody}>
      <DisplaySingleCoin {...coinInfo} />
    </div>
  );
};

export default CoinInfo;
