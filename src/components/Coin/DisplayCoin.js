import React, { useContext } from "react";
import { Button, Table, Typography } from "antd";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import CoinContext from "../context/CoinContext";
import useFetch from "../hooks/useFetch";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";

const DisplayCoin = () => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const { currency } = useContext(CoinContext);
  const { response } = useFetch(
    `coins/markets?vs_currency=${currency.toLowerCase()}&order=market_cap_desc&per_page=50&page=1&sparkline=false`
  );
  const currencySymbol = currency === "USD" ? "$" : "₱";

  //Table Column
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => (
        <img className={styles.coinImg} alt={image} src={image} />
      ),
      width: 30,
      key: "image",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 50,
      key: "name",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      width: 30,
      key: "symbol",
    },
    {
      title: "Price",
      dataIndex: "current_price",
      width: 30,
      key: "current_price",
      sorter: (a, b) => a.current_price - b.current_price,
      render: (value) => {
        return currencySymbol + value.toLocaleString();
      },
    },
    {
      title: "24h Change",
      dataIndex: "price_change_24h",
      width: 30,
      key: "price_change_24h",
      render: (value) => {
        return (
          <p style={{ color: value < 0 ? "red" : "green" }}>
            {value > 0 ? (
              <HiArrowTrendingUp
                size={18}
                style={{ paddingTop: "0.4rem", marginRight: "0.3rem" }}
              />
            ) : (
              <HiArrowTrendingDown
                size={18}
                style={{ paddingTop: "0.4rem", marginRight: "0.3rem" }}
              />
            )}
            {Math.abs(value.toFixed(2)) + "%"}
          </p>
        );
      },
    },
    {
      title: "Action",
      width: 15,
      key: "action",
      fixed: "right",
      render: (coin) => {
        return (
          <Button
            className={styles.tableBttn}
            onClick={() => {
              navigate(`/coin-info/${coin?.id}`);
              window.scroll(0, 0);
            }}
          >
            View
          </Button>
        );
      },
    },
  ];

  return (
    <div className={styles.body}>
      <Title className={styles.title} level={2}>
        Cryptocurrency Price
      </Title>
      <div className={styles.table}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={response}
          scroll={{
            y: 500,
            x: 1000,
          }}
        />
      </div>
    </div>
  );
};

export default DisplayCoin;
