class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let max = 0;
        for (let i = 0; i < prices.length; i++) {
            if (prices[l] < prices[i]) {
                let temp = prices[i] - prices[l];
                if (temp > max) {
                    max = temp;
                }
            } else {
                l = i;
            }
        }
        return max;
    }
}
