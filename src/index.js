import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CryptoProvider } from "./components/context/CoinContext";
import "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CryptoProvider>
        <App />
      </CryptoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
