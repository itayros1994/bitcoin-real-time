import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import { bitcoinService } from "../services/bitcoinServices";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export function BitcoinChart() {
  const [bitcoinData, setbitcoinData] = useState([]);
  const [filterBy, setFilterBy] = useState('1 Week');
  const { coinType, currCoinImg ,coinName} = useSelector((state) => state.bitcoinModule);

  useEffect(() => {
    getBitcoinData("histoday", 7);
    console.log(bitcoinData[2]);
  }, [coinType]);

  const getBitcoinData = (timeType, aggregate) => {
    bitcoinService.getPriceBy(timeType, aggregate, coinType).then((prices) => {
      let data = prices.data.map((price) => {
        if (timeType === "histoday") {
          return {
            name: price.Date.substring(5, 10).split("/").reverse().join("/"),
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

  if (!bitcoinData.length)
    return (
      <div className="loader">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          top={50}
          margin-top={-50}
          margin-left={0}
          margin-right={0}
          timeout={4000} //3 secs
        />
      </div>
    );
  return (
    <div className="overview-container">
      <div className="top-container">
        <ButtonGroup
          className="buttons-group"
          variant="outlined"
          size="large"
          aria-label="large button group"
        >
          {buttons}
        </ButtonGroup>
        <div className="arrows-container">
          <div className="positive-value">
            High: <span className="dollar-sign">$</span>
            {bitcoinData[30].uv.toLocaleString()}
            <img
              className="arrow2 animate-flicker"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dark_Green_Arrow_Up.svg/1200px-Dark_Green_Arrow_Up.svg.png"
              alt=""
            />
          </div>
          <div className="header-coin-iqon-container">
          <a href={`https://coinmarketcap.com/currencies/${coinName}/`}>  <img className="header-coin-iqon" src={currCoinImg} alt="" /></a>
            <span className="coin-type-white">{coinType}</span>
          </div>
          <div className="negative-value">
            Low: <span className="dollar-sign">$</span>
            {bitcoinData[30].pv.toLocaleString()}
            <img
              className="arrow3 animate-flicker"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png"
              alt=""
            />
          </div>
        </div>
        <AreaChart
          className="area-charts"
          width={1100}
          height={500}
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
          <Tooltip/>
          <Area
            type="linear"
            dataKey="uv"
            stroke="rgb(255, 255, 255)"
            fill="#f6a000"
          />
        </AreaChart>
      </div>
      <div className="unfortunately">
        Unfortunately the Charts is not available for mobile mode 📱
      </div>
    </div>
  );
}
