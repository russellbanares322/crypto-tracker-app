import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li onClick={() => navigate("/")}>
            Crypto<span className={styles.span}>Tracker</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
