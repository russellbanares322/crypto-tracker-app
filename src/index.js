import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CryptoProvider } from "./components/context/CoinContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CryptoProvider>
        <App />
      </CryptoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
