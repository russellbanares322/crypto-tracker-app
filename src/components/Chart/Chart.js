import moment from "moment";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CoinContext from "../context/CoinContext";
import useFetch from "../hooks/useFetch";
import styles from "./styles.module.css";

export const Chart = () => {
  const { id } = useParams();
  const { currency } = useContext(CoinContext);
  const currencySymbol = currency === "USD" ? "$" : "₱";

  const { response } = useFetch(
    `/${id}/market_chart?vs_currency=${currency}&days=7`
  );

  const coinChartData = response?.prices.map((val) => ({
    date: moment(val[0]).format("MMM DD"),
    price: val[1].toFixed(2),
  }));

  return (
    <div className={styles.chart_wrapper}>
      <p className={styles.chart_title}>Market Chart Graph</p>
      <ResponsiveContainer className={styles.chart} height={400} width="100%">
        <AreaChart data={coinChartData}>
          <CartesianGrid strokeDasharray="3 5" />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(tick) =>
              `${currencySymbol}${tick.toLocaleString()}`
            }
          />
          <Tooltip
            formatter={(val) =>
              currencySymbol + new Intl.NumberFormat("en").format(val)
            }
          />
          <Area
            dataKey="price"
            type="monotone"
            stroke="#6FD691"
            fill="#ffd3"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
