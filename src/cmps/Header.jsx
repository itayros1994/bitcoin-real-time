import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DropDown } from "../cmps/DropDown";

export function Header() {
  const [currBitcoinRate, setCurrBitcoinRate] = useState("N/A");
  const [percentChange, setpercentChange] = useState("N/A");
  const [coinValueChange, setcoinValueChange] = useState("N/A");
  const [lastUpdate, setLastUpdate] = useState("N/A");
  const [previousCoin, setPreviousCoin] = useState("N/A");

  const { coinType, currCoinImg, coinName } = useSelector(
    (state) => state.bitcoinModule
  );

  const ws = useRef(null);
  useEffect(() => {
    ws.current = new WebSocket("wss://wstest.fxempire.com?token=btctothemoon");
    ws.current.onopen = function (e) {
      ws.current.send(
        JSON.stringify({
          type: "SUBSCRIBE",
          instruments: [`cc-${coinType}-usd-cccagg`],
        })
      );
    };

    ws.current.onmessage = function (event) {
      let data = JSON.parse(event.data);
      setCurrBitcoinRate(data[`cc-${coinType}-usd-cccagg`].last);
      setpercentChange(data[`cc-${coinType}-usd-cccagg`].percentChange);
      setcoinValueChange(data[`cc-${coinType}-usd-cccagg`].change);
      setLastUpdate(data[`cc-${coinType}-usd-cccagg`].lastUpdate);
    };

    ws.current.onerror = function (error) {};
    setPreviousCoin(coinType);
    const wsCurrent = ws.current;

    ws.current.onclose = function (event) {
      wsCurrent.send(
        JSON.stringify({
          type: "UNSUBSCRIBE",
          instruments: [`cc-${previousCoin}-usd-cccagg`],
        })
      );
    };

    return () => {
      wsCurrent.close();
    };
  }, [coinType]);

  return (
    <div className="header-container">
      <h1 className="flicker" data-heading="B">
        itcoin<span className="green-point">.</span>
      </h1>
      <div className="drop-down-container">
        <DropDown />
        <span className="coin-type-hero">
          {coinType.toUpperCase()}
          {<img className="coin-hero-input" src={currCoinImg} alt="" />}
        </span>
      </div>
      <div className="live-stream">
        <div>
          <span>
            <img
              className="arrow animate-flicker"
              src={
                percentChange > 0
                  ? `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dark_Green_Arrow_Up.svg/1200px-Dark_Green_Arrow_Up.svg.png`
                  : `https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png`
              }
              alt=""
            />
          </span>
          ${currBitcoinRate.toLocaleString()}
        </div>
        <div className="presents">
          <span
            className={
              percentChange > 0 ? "price-change-green" : "price-change-red"
            }
          >
            {coinValueChange.toLocaleString()}
          </span>
          ({percentChange}%)
        </div>
        <div className="last-update">
          <a href={`https://coinmarketcap.com/currencies/${coinName}/`}>
            {" "}
            <img className="header-coin-iqon" src={currCoinImg} alt="" />
          </a>
          last update : {lastUpdate.substring(11, 16)}
        </div>
      </div>
    </div>
  );
}
