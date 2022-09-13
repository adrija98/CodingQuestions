// You are given a string S of 2N characters consisting of N ‘[‘ brackets and N ‘]’ brackets. A string is considered balanced if it can be represented in the for S2[S1] where S1 and S2 are balanced strings. We can make an unbalanced string balanced by swapping adjacent characters. Calculate the minimum number of swaps necessary to make a string balanced.


const minimumSwaps = (s) => {
    let pos = [];
    for(let i = 0; i < s.length; ++i)
        if (s[i] == '[')
            pos.push(i);
             
    // To count number of encountered '['
    let count = 0;
    // To track position of next '[' in pos
    let p = 0; 
    // To store result
    let sum = 0;
     
    let S = s.split('');
     
    for(let i = 0; i < s.length; ++i) { 
        // Increment count and move p to next position
        if (S[i] == '[') {
            ++count;
            ++p;
        }
        else if (S[i] == ']')
            --count;
  
        // We have encountered an unbalanced part of string
        if (count < 0) {
            // Increment sum by number of swaps required i.e. position of next '[' - current position
            sum += pos[p] - i;
            let temp = S[i];
            S[i] = S[pos[p]];
            S[pos[p]] = temp;
            ++p;
            // Reset count to 1
            count = 1;
        }
    }
    return sum;
}