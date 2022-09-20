// Given an array of integers arr where arr[i] represents the amount of money in the house i, you are asked to find the maximum amount of money that a robber can steal knowing that he can't steal two adjacent houses because the security systems would automatically call the police


// Example:
// input: arr = [2, 10, 3, 6, 8, 1, 7]
// output: 25
// explanation: The greatest amount of money that a robber can get is 25, by the stealing the house 1, 4, and 6 (arr[1]+arr[4]+arr[6] = 10+8+7 = 25)


const rob1 = (arr, i = 0) => {
    if(i >= arr.length)
        return 0;
    else
        return Math.max(arr[i] + rob1(arr, i + 2), rob1(arr, i + 1));
}

const rob2 = (arr, i = 0, lookup = {}) => {
    if(lookup[arr[i]])
        return lookup[arr[i]];
    if(i >= arr.length)
        return 0;
    else {
        lookup[arr[i]] = Math.max(arr[i] + rob2(arr, i + 2), rob2(arr, i + 1));
        return lookup[arr[i]];
    }
}

const rob3 = (arr) => {
    if(arr.length == 1)
        return arr[0];
    
    let dp = new Array(arr.length);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);

    for(let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[arr.length - 1];
}

console.log(rob2([1, 2, 3, 1]));