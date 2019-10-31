var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit += prices[i] > prices[i - 1] ? prices[i] - prices[i - 1] : 0;
  }

  return profit;
};
