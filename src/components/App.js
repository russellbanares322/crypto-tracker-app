import React, { useState, useEffect } from "react";
import "../styles/App.css";
import axios from "axios";
import Coin from "../components/Coin";
import "../styles/Bit.css";
import Logo from "../images/logo.png";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "17rem",
          }}
        >
          Loading...
        </h1>
      ) : (
        <div className="container-fluid body">
          <img src={Logo} alt="logo" className="rlg pt-2" />
          <h1
            className="text-center pt-3 main_title"
            style={{ color: "#DADCE0" }}
          >
            <i className="fas fa-coins pr-5 fa-pulse"></i>Crypto Currency
            Tracker
          </h1>
          <div className="cn-search">
            <form className="text-center">
              <input
                type="text"
                onChange={handleChange}
                className="mb-5 mt-4 col-form-label srch"
                placeholder="Type here to search"
              />
              <i
                className="fas fa-search-dollar pl-2 fa-lg"
                style={{ color: "#DADCE0" }}
              ></i>
            </form>
          </div>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
