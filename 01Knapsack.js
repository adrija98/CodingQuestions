// Given the value and the weight of each one of n items, we want to maximize the value of items we take in our knapsack without exceeding its capacity k. You are asked to find the maximum total value that we can get without exceeding a total weight of k.

// Note that each item can be took at most once.



// Example:

// input:
// values = [20, 30, 15, 25, 10]
// weights = [6, 13, 5, 10, 3]
// k = 20

// output: 55

// explanation: The maximum total value that we can get is 55, by taking items 0, 3, and 4, their total weight doesn't exceed k
// values[0]+values[3]+values[4] = 20+25+10 = 55
// weights[0]+weights[3]+weights[4] = 6+10+3 = 19 <= 20

// Recusrsive solution
// Time complexity = O(2^n)
// Space complexity = O(n)
const maxValue1 = (values, weights, k, i = 0) => {
    if(i == values.length)
        return 0;
    else if(weights[i] > k)
        return maxValue1(values, weights, k, i + 1)
    else
        return Math.max(values[i] + maxValue1(values, weights, k - weights[i], i + 1), maxValue1(values, weights, k, i + 1));
}

// Dynamic programming: Memoization
// Time complexity = O(kn)
// Space complexity = O(kn)
const maxValue2 = (values, weights, k, i = 0, lookup = {}) => {
    let key = k + ":" + i;
    if(lookup[key])
        return lookup[key];
    if(i == values.length)
        return 0;
    else if(weights[i] > k) {
        lookup[key] = maxValue2(values, weights, k, i + 1);
        return lookup[key];
    }
    else {
        lookup[key] = Math.max(values[i] + maxValue2(values, weights, k - weights[i], i + 1), maxValue2(values, weights, k, i + 1));
        return lookup[key];
    }
}

console.log(maxValue2([37], [24], 91));