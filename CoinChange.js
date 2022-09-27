// Given an integer that represents an amount of money and a list of possible coins, find the minimum number of coins to make that amount.

// Return -1 if it's not possible to make the amount with the given coins.

// Example:
// input:
// amount = 15
// possible_coins = [2, 3, 7]
// output: 4
// explanation: We can make the amount 15 by taking 4 coins only, one coin of value 2, two coins of value 3, and one coin of value 7
// 2+3+3+7 = 15

// Recusion
// Time complexity = O(n 2^m)
// Space complexity = O(n)
const minCoins1 = (coins, amount) => {
    const _minCoins1 = (coins, amount) => {
        if(amount == 0)
            return 0;
        else {
            let minimum = Infinity;
            for(let i = 0; i < coins.length; i++) {
                if(amount - coins[i] >= 0)
                    minimum = Math.min(minimum, 1 + _minCoins1(coins, amount - coins[i]));
            }
            return minimum;
        }
    }

    let minimum = _minCoins1(coins, amount);
    return minimum == Infinity ? -1 : minimum;
}

// By using dynamic programming: Memoization
// Time complexity = O(nm)
// Space complexity = O(nm)
const minCoins2 = (coins, amount) => {
    const _minCoins2 = (coins, amount, lookup = {}) => {
        if(lookup[amount])
            return lookup[amount]
        if(amount == 0)
            return 0;
        else {
            let minimum = Infinity;
            for(let i = 0; i < coins.length; i++) {
                if(amount - coins[i] >= 0)
                    minimum = Math.min(minimum, 1 + _minCoins2(coins, amount - coins[i], lookup));
            }
            lookup[amount] = minimum;
            return lookup[amount];
        }
    }

    let minimum = _minCoins2(coins, amount);
    return minimum == Infinity ? -1 : minimum;
}

// By using dynamic programming: Tabulation
// Time complexity: O(nm)
// Space complexity: O(n)
const minCoins3 = (coins, amount) => {
    let dp = [...Array(amount+1)].map(x => Infinity);
    dp[0] = 0;

    for(let i = 1; i < amount + 1; i++) {
        for(let coin of coins)
            if((i-coin) >= 0)
                dp[i] = Math.min(dp[i], 1 + dp[i-coin]);
    }
    return dp[amount] == Infinity? -1 : dp[amount];
}

console.log(minCoins3([2, 3, 7], 15));