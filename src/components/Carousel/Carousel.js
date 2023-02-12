import React, { useContext, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import CoinContext from "../context/CoinContext";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";

const Carousel = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = useContext(CoinContext);

  //Fetching of trending coins
  const { response } = useFetch(
    `coins/markets?vs_currency=${
      currency.toLowerCase() || "usd"
    }&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  );

  useEffect(() => {
    const currentCurrency = localStorage.getItem("currency");
    if (currentCurrency) {
      setCurrency(currentCurrency);
    }
  }, []);
  //Carousel data
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
  };

  const items = response?.map((coin) => {
    return (
      <div
        onDragStart={handleDragStart}
        key={coin?.id}
        className={styles.cardBody}
        onClick={() => {
          navigate(`/coin-info/${coin?.id}`);
          window.scroll(0, 0);
        }}
      >
        <img alt="coinImage" className={styles.cardImg} src={coin?.image} />
        <p className={styles.cardCoinName}>{coin?.name}</p>
        <p
          className={styles.cardPriceChange}
          style={{ color: coin?.price_change_24h < 0 ? "red" : "green" }}
        >
          {coin?.price_change_24h > 0 ? (
            <HiArrowTrendingUp
              size={18}
              style={{ paddingTop: "0.4rem", marginRight: "0.3rem" }}
            />
          ) : (
            <HiArrowTrendingDown
              size={18}
              style={{ paddingTop: "0.4rem", marginRight: "0.3rem" }}
            />
          )}
          {Math.abs(coin?.price_change_24h.toFixed(2)) + "%"}
        </p>
        <p className={styles.cardPrice}>
          {currency === "USD" ? "$" : "₱"}
          {coin?.current_price.toLocaleString()}
        </p>
      </div>
    );
  });

  return (
    <div className={styles.body}>
      <p className={styles.carouselTitle}>Trending Coins</p>
      <div className={styles.card} style={{ margin: 0 }}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          animationDuration={15000}
          autoPlay
          autoPlayInterval={1000}
          disableButtonsControls
          disableDotsControls
        />
      </div>
    </div>
  );
};

export default Carousel;
