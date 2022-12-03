import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import CoinContext from "../context/CoinContext";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { REACT_APP_COIN_API } = process.env;
  const { currency } = useContext(CoinContext);
  const [trendingCoin, setTrendingCoin] = useState([]);
  const navigate = useNavigate();
  //Fetching of trending coins
  useEffect(() => {
    axios
      .get(
        `${REACT_APP_COIN_API}/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
      )
      .then((res) => {
        setTrendingCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currency]);

  //Carousel data

  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 4 },
    568: { items: 4 },
    1024: { items: 4 },
  };

  const items = trendingCoin.map((coin) => {
    return (
      <div key={coin?.id} className={styles.card} onDragStart={handleDragStart}>
        <div
          className={styles.cardBody}
          onClick={() => navigate(`/coin-info/${coin.id}`)}
        >
          <img alt="coinImage" className={styles.cardImg} src={coin?.image} />
          <p
            className={styles.cardPriceChange}
            style={{ color: coin?.price_change_24h < 0 ? "red" : "green" }}
          >
            {coin?.price_change_24h > 0 && "+"}
            {coin?.price_change_24h.toFixed(2) + "%"}
          </p>
          <p className={styles.cardPrice}>
            {currency === "USD" ? "$" : "₱"}
            {coin?.current_price.toLocaleString()}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.body}>
      <p className={styles.carouselTitle}>Trending Coins</p>
      <div className="container">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          animationDuration={15000}
          autoPlay
          autoPlayInterval={1000}
          disableDotsControls
          disableButtonsControls
        />
      </div>
    </div>
  );
};

export default Carousel;
