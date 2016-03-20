/*
  Write an efficient function that takes stockPricesYesterday and returns the
  best profit I could have made from 1 purchase and 1 sale of 1 stock yesterday.
*/

function getMaxProfit(prices) {
  if (prices.length < 2) {
    return;
  }
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
