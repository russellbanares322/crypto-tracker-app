import { createContext, useState } from "react";

const CoinContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  const handleChange = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
    localStorage.setItem("currency", e.target.value);
  };

  return (
    <CoinContext.Provider value={{ currency, setCurrency, handleChange }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;
