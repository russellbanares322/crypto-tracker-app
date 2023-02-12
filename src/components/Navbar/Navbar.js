import React, { useContext } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import CoinContext from "../context/CoinContext";

const Navbar = () => {
  const { currency, handleChange } = useContext(CoinContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li onClick={() => navigate("/")}>
            Tracke<span className={styles.span}>roo</span>
          </li>
        </ul>
        <div className={styles.selectDiv}>
          <select onChange={handleChange}>
            <option value={currency} style={{ display: "none" }}>
              {currency}
            </option>
            <option value="USD">USD</option>
            <option value="PHP">PHP</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
