let socket = new WebSocket("wss://wstest.fxempire.com?token=btctothemoon");

socket.onopen = function(e) {
  alert("[open] Connection established");
  alert("Sending to server");
  socket.send(JSON.stringify({"type":"SUBSCRIBE","instruments":["cc-btc-usd-cccagg"]}));
};

socket.onmessage = function(event) {
  // console.log(`[message] Data received from server: ${event.data}`);
  var response = JSON.parse(event.data)
  console.log(response)
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};