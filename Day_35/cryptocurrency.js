document.addEventListener("DOMContentLoaded", function () {
  function connectWebSocket(symbol, elementId) {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}usdt@trade`
    );
    let oldPrice = 0;

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const price = parseFloat(data.p).toFixed(2);

      // Find the element with the specified ID
      const tradeElement = document.getElementById(elementId);
      if (tradeElement) {
        // If the element is found, update its content
        tradeElement.innerText = `$${price}`;
      } else {
        // If the element is not found, log an error
        console.error(`Element with ID '${elementId}' not found.`);
      }

      // Update old price
      oldPrice = price;
    };
  }

  // Connect WebSocket for BTC/USDT
  connectWebSocket("BTC", "btcPrice");

  // Connect WebSocket for ETH/USDT
  connectWebSocket("ETH", "ethPrice");

  // Connect WebSocket for DOGE/USDT
  connectWebSocket("DOGE", "dogePrice");
});
