// Given an integer n, create a function that returns as strings all the n-bits boolean numbers that have at most 2 zeros

// Example 1:
// input: n = 4
// output: ['0011', '0101', '0110', '0111', '1001', '1010', '1011', '1100', '1101', '1110', '1111']

// Example 2:
// input: n = 6
// output: ['001111', '010111', '011011', '011101', '011110', '011111', '100111', '101011', '101101', '101110', '101111', '110011', '110101', '110110', '110111', '111001', '111010', '111011', '111100', '111101', '111110', '111111']

// Time complexity = O(n 2^n)
// Space complexity = O(n 2 n)
const binaryNumber = (n, str = [], output = [], zeroes = 0) => {
    if(zeroes > 2)
        return;
    if(str.length === n) {
        output.push(new Array(str.join("")));
        return;
    } else {
        str.push("0");
        binaryNumber(n, str, output, zeroes + 1);
        str.pop();
        str.push("1");
        binaryNumber(n, str, output, zeroes);
        str.pop();
    }

    return output;
}

console.log(binaryNumber(4));