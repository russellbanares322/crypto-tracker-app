import { Row, Col } from "antd";
import React, { useContext, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import CoinContext from "../context/CoinContext";
import styles from "./styles.module.css";

const DisplaySingleCoin = ({
  isLoading,
  image,
  name,
  market_data,
  market_cap_rank,
  description,
}) => {
  const { currency, setCurrency } = useContext(CoinContext);

  useEffect(() => {
    const currencyData = localStorage.getItem(
      "currency",
      JSON.stringify(currency)
    );
    if (currencyData) {
      setCurrency(currencyData);
    }
  }, []);

  return (
    <div className={styles.body}>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Row>
            <Col lg={12} xl={12} md={12} sm={24}>
              <p className={styles.coinName}>{name}</p>
              <p className={styles.coinPrice}>
                {currency === "USD" ? "$" : "₱"}
                {
                  market_data?.current_price[
                    currency.toLocaleString().toLowerCase()
                  ]
                }
              </p>
              <p className={styles.coinRank}>Rank: {market_cap_rank}</p>
              <p className={styles.coinDesc}>
                {ReactHtmlParser(description?.en.split(". ")[0])}.
              </p>
            </Col>
            <Col lg={12} xl={12} md={12} sm={24}>
              <img className={styles.singleCoinImg} src={image?.large} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default DisplaySingleCoin;
