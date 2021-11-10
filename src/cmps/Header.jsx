import React, { useState } from "react";

export function Header() {
  const [currBitcoinRate, setCurrBitcoinRate] = useState("68,234.12");
  const [percentChange, setpercentChange] = useState("4.05");
  const [coinValueChange, setcoinValueChange] = useState("1,500.22");

  let socket = new WebSocket("wss://wstest.fxempire.com?token=btctothemoon");
  socket.onopen = function (e) {
    console.log(e);
    socket.send(
      JSON.stringify({ type: "SUBSCRIBE", instruments: ["cc-btc-usd-cccagg"] })
    );
  };

  socket.onmessage = function (event) {
    // console.log(JSON.parse(event.data));
    let data = JSON.parse(event.data);
    console.log(data["cc-btc-usd-cccagg"]);
    setCurrBitcoinRate(data["cc-btc-usd-cccagg"].last);
    setpercentChange(data["cc-btc-usd-cccagg"].percentChange);
    setcoinValueChange(data["cc-btc-usd-cccagg"].change);
  };

  socket.onclose = function (event) {
    socket.send(
      JSON.stringify({
        type: "UNSUBSCRIBE",
        instruments: ["cc-btc-usd-cccagg"],
      })
    );
  };

  socket.onerror = function (error) {
    console.log(`[error] ${error.message}`);
  };

  const checkValue = () => {
    // check if Positive
    if (percentChange > 0) return true;
    // check if negative
    else {
      return false;
    }
  };
  
  return (
    <div className="header-container">
      <div className="summary">
        Bitcoin
        <img
          src="https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/btc.png?func=cover&q=70&width=25&height=25"
          alt=""
        />
      </div>
      <div className="live-stream">
        <div>
          <span>
            <img
              className="arrow"
              src={checkValue() ? `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dark_Green_Arrow_Up.svg/1200px-Dark_Green_Arrow_Up.svg.png` : `https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png`}
              alt=""
            />
          </span>
          {currBitcoinRate.toLocaleString()}
        </div>
        <div className="presents">
          <span className={checkValue() ? "price-change-green" : "price-change-red"}>
            {coinValueChange.toLocaleString()}
          </span>
          ({percentChange}%)
        </div>
      </div>
    </div>
  );
}
