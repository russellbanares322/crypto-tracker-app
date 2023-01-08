import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisplaySingleCoin from "./DisplaySingleCoin";
import styles from "./styles.module.css";

const CoinInfo = () => {
  const { REACT_APP_COIN_API } = process.env;
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Fetching of coin info
  const getCoinInfo = async () => {
    setIsLoading(true);
    await axios
      .get(`${REACT_APP_COIN_API}/${id}`)
      .then((res) => {
        setCoinInfo(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    id && getCoinInfo();
  }, [id]);

  return (
    <>
      <div className={styles.coinInfoBody}>
        <DisplaySingleCoin {...coinInfo} isLoading={isLoading} />
      </div>
      {/* <CoinChart /> */}
    </>
  );
};

export default CoinInfo;
