import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { bitcoinService } from "../services/bitcoinServices";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function BitcoinChart() {
  const [bitcoinData, setbitcoinData] = useState([]);

  useEffect(() => {
    getBitcoinData("histohour", 1);
  }, []);

  const getBitcoinData = (timeType, aggregate) => {
    bitcoinService.getPriceBy(timeType, aggregate).then((prices) => {
      let data = prices.data.map((price) => {
        if (timeType === "histoday") {
          return {
            name: price.Date.substring(5, 10),
            uv: price.High,
            pv: price.Low,
            amt: price.Open,
          };
        } else {
          return {
            name: price.Date.substring(10, 16),
            uv: price.High,
            pv: price.Low,
            amt: price.Open,
          };
        }
      });
      setbitcoinData(data);
      console.log(bitcoinData);
    });
  };

  const buttons = [
    <Button onClick={() => getBitcoinData("histominute", 1)} key="one">
      1 Min
    </Button>,
    <Button onClick={() => getBitcoinData("histominute", 5)} key="two">
      5 Min{" "}
    </Button>,
    <Button onClick={() => getBitcoinData("histohour", 1)} key="two">
      1 Hour{" "}
    </Button>,
    <Button onClick={() => getBitcoinData("histoday", 7)} key="two">
      1 Week{" "}
    </Button>,
  ];

  if (!bitcoinData.length) return "lodaing...";
  return (
    <ResponsiveContainer>
      <div className="overview-container">
        <ButtonGroup
          className="buttons-group"
          variant="outlined"
          size="large"
          aria-label="large button group"
        >
          {buttons}
        </ButtonGroup>
        <div className="area-charts">
          <AreaChart
            width={1400}
            height={600}
            data={bitcoinData}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 100,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="rgb(255, 255, 255)"
              fill="#f6a000"
            />
          </AreaChart>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
