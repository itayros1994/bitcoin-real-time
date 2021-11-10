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
} from "recharts";

export function OverView() {
  let data = [];
  const [bitcoinData, setbitcoinData] = useState([]);

  useEffect(() => {
    getBitcoinData("histohour", 1);
  }, []);

  const getBitcoinData = (timeType, aggregate) => {
    data = [];
    bitcoinService.getPriceBy(timeType, aggregate).then((prices) => {
      prices.data.map((price) => {
        // console.log(price);

        if(timeType === 'histoday' ) {
            data.push({
              name:price.Date.substring(5, 10),
              uv: price.High,
              pv: price.Low,
              amt: price.Open,
            });
        } else {
            data.push({
                name:price.Date.substring(10, 16),
                uv: price.High,
                pv: price.Low,
                amt: price.Open,
              });
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

  return (
    <div>
      <ButtonGroup
        className="buttons-group"
        variant="contained"
        size="large"
        aria-label="large button group"
      >
        {buttons}
      </ButtonGroup>

      <AreaChart
        width={1500}
        height={600}
        data={bitcoinData}
        margin={{
          top: 40,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="rgb(255, 166, 100)" fill="rgb(40, 120, 180)" />
      </AreaChart>
    </div>
  );
}
