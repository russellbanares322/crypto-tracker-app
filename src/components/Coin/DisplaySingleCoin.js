import React, { useContext } from "react";
import CoinContext from "../context/CoinContext";
import styles from "./styles.module.css";
import ReactHtmlParser from "react-html-parser";
import { Triangle } from "react-loader-spinner";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Chart } from "../Chart/Chart";

const DisplaySingleCoin = () => {
  const { currency } = useContext(CoinContext);
  const { id } = useParams();
  const { response, isLoading } = useFetch(`/${id}`);

  return (
    <div
      className={styles.body}
      style={{
        height: isLoading ? "100vh" : "auto",
      }}
    >
      {isLoading ? (
        <div className={styles.coinInfoLoader}>
          <Triangle
            height="130"
            width="130"
            color="#6FD691"
            ariaLabel="triangle-loading"
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "9rem",
            }}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className={styles.coin_info_wrapper} key={response?.id}>
            <div className={styles.coin_details_wrapper}>
              <p className={styles.coinName}>{response?.name}</p>
              <p className={styles.coinPrice}>
                <strong>Current Price:</strong> {currency === "USD" ? "$" : "₱"}
                {response?.market_data.current_price[
                  currency.toLowerCase()
                ].toLocaleString()}
              </p>
              <p className={styles.coinPrice}>
                <strong>Market Cap:</strong> {currency === "USD" ? "$" : "₱"}
                {response?.market_data.market_cap[currency.toLowerCase()]
                  .toLocaleString()
                  .slice(0, -4)}
                M
              </p>
              <p className={styles.coinRank}>
                <strong>Rank:</strong> {response?.market_cap_rank}
              </p>
              <p className={styles.coinDesc}>
                {ReactHtmlParser(response?.description.en.split(". ")[0])}.
              </p>
            </div>
            <div className={styles.image_wrapper}>
              <img
                alt="coinImg"
                className={styles.singleCoinImg}
                src={response?.image.large}
              />
            </div>
          </div>
          <Chart />
        </>
      )}
    </div>
  );
};

export default DisplaySingleCoin;
