/* 
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/



var maxProfit_while = function(prices) {
    
    let greatest = 0
    
    while(prices.length > 1){
        console.log(prices)
        for (let i=0; i<prices.length; i++){
            if(prices[i]-prices[0] > greatest){
                greatest = prices[i] - prices[0]
            }
        }
        prices.shift()
    }
    
    return greatest
    
    
};

var maxProfit_recursive = function(prices, greatest=0) {
    
    if (prices.length < 1){
        return greatest
    }
    
    for (let i=0; i<prices.length; i++){
        if(prices[i]-prices[0] > greatest){
            greatest = prices[i] - prices[0]
        }
    }

    prices.shift()
    return maxProfit_recursive(prices, greatest)    

};


let maxProfit_good = function(prices) {
    let minBuyPrice = Infinity;
    let maxProfit = 0;
  
    for (let price of prices) {
      if (price < minBuyPrice) {
        minBuyPrice = price;
      } else if (price - minBuyPrice > maxProfit) {
        maxProfit = price - minBuyPrice;
      }
    }
  
    return maxProfit; 
  };


let prices = [7,6,4,3,1] // output should be 0
let prices2 = [7,1,3,6,4] //output should be 5




