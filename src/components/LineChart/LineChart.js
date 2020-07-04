import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartExample = (props) => {
  const [chartWidth, setChartWidth] = useState(1200);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.currentTarget.innerWidth < 1200) {
        setChartWidth(e.currentTarget.innerWidth - 50);
      }else{
        setChartWidth(1200);
      }
    });
  }, []);

  return (
    <LineChart
      width={chartWidth}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="id" />
      <YAxis dataKey="votes" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="votes"
        stroke="#ffa500"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default LineChartExample;
