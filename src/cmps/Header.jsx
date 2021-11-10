import React, { useState } from "react";

export function Header() {

  const [currBitcoinRate, setCurrBitcoinRate] = useState('68,234.12')
  let socket = new WebSocket("wss://wstest.fxempire.com?token=btctothemoon");
  socket.onopen = function(e) {
    console.log(e);
    socket.send(JSON.stringify({type:"SUBSCRIBE",instruments:["cc-btc-usd-cccagg"]}));
  };
  
  socket.onmessage = function(event) {
    // console.log(JSON.parse(event.data));
    let data = JSON.parse(event.data)
    setCurrBitcoinRate(data['cc-btc-usd-cccagg'].last)
  };
  
  socket.onclose = function(event) {
    socket.send(JSON.stringify({type:"UNSUBSCRIBE",instruments:["cc-btc-usd-cccagg"]}));
  };
  
  socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dark_Green_Arrow_Up.svg/1200px-Dark_Green_Arrow_Up.svg.png"
              alt=""
            />
          </span>
          <span>
            <img
              className="arrow"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png"
              alt=""
            />
          </span>
          {currBitcoinRate.toLocaleString()}$
        </div>
        <div className="presents">
          <span className="price-change">1.515.15</span>
          (2.35%)
        </div>
      </div>
    </div>
  );
}
