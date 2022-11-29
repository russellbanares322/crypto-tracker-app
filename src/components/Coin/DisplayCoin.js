import React from "react";
import { Button, Table, Typography } from "antd";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const DisplayCoin = ({ data }) => {
  const { Title } = Typography;
  const navigate = useNavigate();
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
        return "$" + value.toLocaleString();
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
            {value.toFixed(2) + "%"}
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
            onClick={() => navigate(`/coin-info/${coin.id}`)}
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
        Cryptocurrency Prices
      </Title>
      <div className={styles.table}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
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
