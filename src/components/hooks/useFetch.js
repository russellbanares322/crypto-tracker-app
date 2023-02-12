import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.baseURL = process.env.REACT_APP_COIN_API;

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
  }, [url]);

  return { response, isLoading };
};

export default useFetch;
