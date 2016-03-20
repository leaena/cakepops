function getMaxProfit(prices) {
  if(prices.length < 2){ return; }
  var minPrice = prices[0];
  var maxProfit = prices[0] - prices[1];
  for (var i = 1; i < prices.length; i++) {
    var price = prices[i];
    var profit = price - minPrice;
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
