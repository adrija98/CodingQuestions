// Given an interval newInterval and an array of intervals, create a function that inserts that newInterval in the array, and to merge if necessary. Note that the intervals in the array are non-overlapping, and are sorted according to their starting point.

// Example 1:
// Input: intervals = [[1, 3], [4, 7], [8, 10], [12, 15], [16, 17], [18, 20], [21, 25], [28, 29]], newInterval = [9, 18]
// Output: [[1, 3], [4, 7], [8, 20], [21, 25], [28, 29]]

// Time complexity: O(n)
// Space complexity: O(n)
const insertInterval = (intervals, newInterval) => {
    let current = 0;
    let [newStart, newEnd] = [...newInterval];
    const mergedIntervals = [];

    while(current < intervals.length) {
        const interval = intervals[current];
        let [aStart, aEnd] = [...interval];

        if(aEnd < newStart) {
            mergedIntervals.push(interval);
            current++;
        } else {
            newStart = Math.min(aStart, newStart);
            while(newEnd > aEnd && current + 1 < intervals.length) {
                current++;
                [aStart, aEnd] = [...intervals[current]];
            }
            if(newEnd >= aStart) {
                newEnd = Math.max(newEnd, aEnd);
                current++;
            }
            break;
        }
    }

    // push after coming out of loop in case there are no intervals that can be merged
    mergedIntervals.push([newStart, newEnd]);

    while(current < intervals.length) {
        mergedIntervals.push(intervals[current++]);
    }

    return mergedIntervals;
}

console.log(insertInterval([[1, 3], [4, 6]], newInterval = [7, 10]));