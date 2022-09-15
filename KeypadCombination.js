// Given a string keys that contains the keys that we pressed in a phone keypad, create a function that returns all the possible combinations of characters that can be made. Keypad keys and the characters that they can make:

// 0: +, 1: . , 2: ABC, 3: DEF, 4: GHI, 5: JKL, 6: MNO, 7: PQRS, 8: TUV, 9: WXYZ

// Example 1:
// input: keys = '29'
// output: ['AW', 'AX, 'AY', 'AZ', 'BW', BX', 'BY', 'BZ', 'CW', 'CX', 'CY', 'CZ']

// Example 2:
// input: kets = '374'
// output: ["DPG", "DPH", "DPI", "DQG", "DQH", "DQI", "DRG", "DRH", "DRI", "DSG", "DSH", "DSI", "EPG", "EPH", "EPI", "EQG", "EQH", "EQI", "ERG", "ERH", "ERI", "ESG", "ESH", "ESI", "FPG", "FPH", "FPI", "FQG", "FQH", "FQI", "FRG", "FRH", "FRI", "FSG", "FSH", "FSI"]

// Time complexity = O(n 4^n)
// Space complexity = O(n 4^n)
const combs = (arr, i = 0, phrase = [], result = []) => {
    if(i === arr.length) {
        result.push(new Array(...phrase).join(""));
    }
    else {
        for(word of arr[i]) {
            phrase.push(word);
            combs(arr, i+1, phrase, result);
            phrase.pop();
        }
    }
    return result;
}

const keypadCombination = (keys) => {
    keypad = {"0": "+", "1": "." , "2": "ABC", "3": "DEF", "4": "GHI", "5": "JKL", "6": "MNO", "7": "PQRS", "8": "TUV", "9":"WXYZ"};
    keyArr = keys.split("");
    arr = []
    for(let key of keyArr) {
        arr.push(keypad[key].split(""));
    }
    return combs(arr);
}

console.log(keypadCombination("29"));