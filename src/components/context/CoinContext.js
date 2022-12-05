import { createContext, useEffect, useState } from "react";

const CoinContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("currency", currency ? currency : "USD");
  }, [currency]);

  return (
    <CoinContext.Provider value={{ currency, setCurrency, handleChange }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;
