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
            Bitcoin App!
        </div>
      <div className="live-stream">
        64.434$
      </div>
    </div>
  );
}

