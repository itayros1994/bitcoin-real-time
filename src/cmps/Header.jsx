import React from "react";

export function Header() {

// Create WebSocket connection.
const socket = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon');

socket.onmessage = (event) => {
    console.log(event.data);  
}

return (
    <div className="header-container">
        <div className="summary">
            Bitcoin
            <img src="https://responsive.fxempire.com/v7/_fxcrypto_/crypto/crypto-logos/btc.png?func=cover&q=70&width=25&height=25" alt="" />
        </div>
      <div className="live-stream">
        <div>
        <span><img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dark_Green_Arrow_Up.svg/1200px-Dark_Green_Arrow_Up.svg.png" alt="" /></span>
        <span><img className="arrow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png" alt="" /></span>
        64.434$
        </div>
        <div className="presents">
          (2.35%)
        </div>
      </div>
    </div>
  );
}

