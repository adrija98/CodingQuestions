const searchRotated = (arr) => {

    let low = 0, high = arr.length - 1;

    if(arr[low] <= arr[high])
        return arr[0];

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(mid > 0 && arr[mid] < arr[mid - 1])
            return arr[mid];
        if(mid < arr.length - 1 && arr[mid] > arr[mid])
            return arr[mid + 1];
        if(arr[low] > arr[mid])
            high = mid - 1;
        if(arr[high] < arr[mid])
            low = mid + 1;
    }

    return [];
}

console.log(searchRotated([10, 2]));
console.log(searchRotated([2]));
console.log(searchRotated([9, 10, 2, 5, 8]));