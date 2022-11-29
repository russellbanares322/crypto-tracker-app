import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li>
            Crypto<span className={styles.span}>Tracker</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
