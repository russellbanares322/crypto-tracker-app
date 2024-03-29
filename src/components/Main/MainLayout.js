import { Row, Col, Image } from "antd";
import React from "react";
import styles from "./styles.module.css";
import mainImage from "../../images/crypto.svg";
import Carousel from "../Carousel/Carousel";
import DisplayCoin from "../Coin/DisplayCoin";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Row>
        <Col lg={12} xl={12} md={12} sm={24}>
          <p className={styles.mainTitle}>
            Track your favorite <br />
            Crypto Currency Coin
          </p>
          <p className={styles.mainTitle2}>
            This displays a lot of crypto currency coin data
          </p>
        </Col>
        <Col lg={12} xl={12} md={12} sm={24}>
          <Image className={styles.mainImg} src={mainImage} preview={false} />
        </Col>
      </Row>
      <div>
        <Carousel />
      </div>
      <DisplayCoin />
    </div>
  );
};

export default MainLayout;
