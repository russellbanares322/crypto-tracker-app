import { createContext, useEffect, useState } from "react";

const CoinContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    localStorage.setItem("currency", currency ? currency : "");
  }, [currency]);

  return (
    <CoinContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;
