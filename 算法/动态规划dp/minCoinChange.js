/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

    //     暴力递归解,超时,O(k*n^k)
    //     if(amount == 0){
    //         return 0;
    //     }
    //     var min = Number.MAX_VALUE;
    //     for(let i = 0; i < coins.length; i ++){
    //         if(amount - coins[i] < 0){
    //             continue;
    //         }
    //         let result = coinChange(coins, amount-coins[i]);
    //         if(result == -1){
    //             continue;
    //         }
    //         if(result < min){
    //             min = result;
    //         }
    //     }

    //     return min==Number.MAX_VALUE? -1 : min+1;

    // // 带备忘录的递归解，时间复杂度O(n)
    // var memo = [];
    // for(let i = 0; i <= amount; i ++){
    //     memo[i] = -2;
    // }
    // function memo_change(coins,amount){
    //     if (amount == 0) {
    //         return 0;
    //     }
    //     if (memo[amount] != -2) {
    //         return memo[amount];
    //     }
    //     var min = Number.MAX_VALUE;
    //     for (let i = 0; i < coins.length; i++) {
    //         if (amount - coins[i] < 0) {
    //             continue;
    //         }
    //         let result = memo_change(coins, amount - coins[i]);
    //         if (result == -1) {
    //             continue;
    //         }
    //         if (result+1 < min) {
    //             min = result+1;
    //         }
    //     }
    //     memo[amount] = min == Number.MAX_VALUE ? -1 : min;
    //     console.log(amount,memo[amount])
    //     return memo[amount];
    // }
    // return memo_change(coins,amount);

//     动态规划
    var dp = [];
    dp[0] = 0;
    for(let i = 1; i <= amount; i ++){
        dp[i] = amount;
    }
    for(let i = 1; i <= amount; i ++){
        for(let j = 0; j < coins.length; j ++){
            if(i - coins[j]<0){
                continue;
            }
            dp[i]= Math.min(dp[i],dp[i-coins[j]]+1);
            console.log(i,dp[i],i-coins[j],dp[i-coins[j]]+1);
        }
    }
    return dp[amount]
};
var coins = [1,2,5];
var amount = 11;
console.log(coinChange(coins,amount));
