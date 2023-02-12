import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CoinContext from "../context/CoinContext";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { currency, setCurrency } = useContext(CoinContext);

  axios.defaults.baseURL = process.env.REACT_APP_COIN_API;

  useEffect(() => {
    const currentCurrency = localStorage.getItem("currency");
    if (currentCurrency) {
      setCurrency(currentCurrency);
    }
  }, []);

  const handleFetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios(url);
      setResponse(result.data);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line
  }, [url, currency]);

  return { response, isLoading };
};

export default useFetch;
