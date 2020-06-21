import React from "react";
import { extent } from "d3-array";
import { scaleLinear, scaleBand } from "d3-scale";
import { line } from "d3-shape";
import { transition } from "d3-transition";

import XYAxis from "./XY-Axis";
import Line from "./Line";
import './LineChart.css';

const LineChart = (props) => {
  const { data } = props;

  const parentWidth = 1200;

  const margins = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  const width = parentWidth - margins.left - margins.right;
  const height = 200 - margins.top - margins.bottom;

  const ticks = 5;
  const t = transition().duration(1000);

  const xScale = scaleBand()
    .domain(data.map((d) => d.id))
    .rangeRound([0, width])
    .padding(0.1);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.votes))
    .range([height, 0])
    .nice();

  const lineGenerator = line()
    .x((d) => xScale(d.id))
    .y((d) => yScale(d.votes));

  return (
    <div className="chart-wrapper">
      <svg
        className="lineChartSvg"
        width={width + margins.left + margins.right}
        height={height + margins.top + margins.bottom}
      >
        <g transform={`translate(${margins.left}, ${margins.top})`}>
          <XYAxis {...{ xScale, yScale, height, ticks, t }} />
          <Line
            data={data}
            xScale={xScale}
            yScale={yScale}
            lineGenerator={lineGenerator}
            width={width}
            height={height}
          />
        </g>
      </svg>
    </div>
  );
};

export default LineChart;
