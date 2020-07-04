import React from "react";
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
  return (
    <LineChart
      width={1300}
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
