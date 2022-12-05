import { Row, Col } from "antd";
import React, { useContext, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import CoinContext from "../context/CoinContext";
import styles from "./styles.module.css";
import ReactHtmlParser from "react-html-parser";

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
        <div className={styles.coinInfoLoader}>
          <ClipLoader size={70} color="#19b84eea" />
        </div>
      ) : (
        <>
          <Row>
            <Col lg={12} xl={12} md={12} sm={24}>
              <p className={styles.coinName}>{name}</p>
              <p className={styles.coinPrice}>
                <strong>Current Price:</strong> {currency === "USD" ? "$" : "₱"}
                {market_data?.current_price[
                  currency.toLowerCase()
                ].toLocaleString()}
              </p>
              <p className={styles.coinPrice}>
                <strong>Market Cap:</strong> {currency === "USD" ? "$" : "₱"}
                {market_data?.market_cap[currency.toLowerCase()]
                  .toLocaleString()
                  .slice(0, -4)}
                M
              </p>
              <p className={styles.coinRank}>
                <strong>Rank:</strong> {market_cap_rank}
              </p>
              <p className={styles.coinDesc}>
                {ReactHtmlParser(description?.en.split(". ")[0])}.
              </p>
            </Col>
            <Col lg={12} xl={12} md={12} sm={24}>
              <img
                alt="coinImg"
                className={styles.singleCoinImg}
                src={image?.large}
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default DisplaySingleCoin;
