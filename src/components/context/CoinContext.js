import { createContext, useEffect, useState } from "react";

const CoinContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
    localStorage.setItem("currency", e.target.value);
  };

  return (
    <CoinContext.Provider
      value={{ currency, setCurrency, handleChange, isLoading }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;
