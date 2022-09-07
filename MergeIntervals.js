// Given an array of intervals, create a function that returns an array where overlapping intervals are merged.

// Example 1:
// Input: intervals = [[1, 4], [5, 8], [7, 10], [9, 13], [14, 16], [16, 20], [17, 19]]
// Output: [[1, 4], [5, 13], [14, 20]]


// Time complexity: O(nlogn)
// Space complexity: O(n)
const mergeIntervals = (intervals) => {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    let current = 0;
    const mergedIntervals = [sortedIntervals[current++]];

    while(current < sortedIntervals.length) {
        const interval = mergedIntervals.pop();
        const [aStart, aEnd] = [...interval];
        const [bStart, bEnd] = [sortedIntervals[current][0], sortedIntervals[current][1]];

        if(aEnd < bStart) {
            mergedIntervals.push(interval);
            mergedIntervals.push(sortedIntervals[current]);
        } else {
            const [cStart, cEnd] = [aStart, Math.max(aEnd, bEnd)];
            mergedIntervals.push([cStart, cEnd]);
        }

        current++;
    }

    return mergedIntervals;
}

console.log(mergeIntervals([[1, 2], [2, 3]]));