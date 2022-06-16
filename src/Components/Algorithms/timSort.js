
function minRunLength(n) {

    // Beocmes 1 if any 1 bits are shifted off
    let r = 0;
    while (n >= 32) {
        r |= (n & 1);
        n >>= 1;
    }
    return n + r;
}

// sorts array from left index to right index which is size of run
function insertionSort(arr, left, right, comparisons) {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i-1;
        while (j >= left && arr[j] > temp) {
            comparisons.push([j+1, j])
            comparisons.push([j+1, j])
            comparisons.push([j+1, arr[j]])
            arr[j+1] = arr[j];
            j--;
        }
        comparisons.push([j+1, j+1])
        comparisons.push([j+1, j+1])
        comparisons.push([j+1, temp])
        arr[j+1] = temp;
    }
    return comparisons
}

// original array is separated into left and right subarrays
function merge(arr, left, middle, right, comparisons) {
    let len1 = middle - left + 1, len2 = right - middle;
    let leftArr = new Array(len1);
    let rightArr = new Array(len2);
    for (let x = 0; x < len1; x++) {
        leftArr[x] = arr[left + x]
    }
    for(let x = 0; x < len2; x++) {
        rightArr[x] = arr[middle + 1 + x]
    }
    
    let i = 0;
    let j = 0;
    let k = left;

    // After comparison, merge array into larger sub array
    while (i < len1 && j < len2) {
        if (leftArr[i] <= rightArr[j]) {
            comparisons.push([k, i + left])
            comparisons.push([k, i + left])
            comparisons.push([k, leftArr[i]])
            arr[k] = leftArr[i];
            i++;
        }
        else {
            comparisons.push([k, j + 1 + middle])
            comparisons.push([k, j + 1 + middle])
            comparisons.push([k, rightArr[j]])
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // copy remaining elements of left, if any
    while (i < len1) {
        comparisons.push([k, i + left])
        comparisons.push([k, i + left])
        comparisons.push([k, leftArr[i]])
        arr[k] = leftArr[i];
        k++;
        i++;
    }

    // copy remaining elements of right, if any
    while (j < len2) {
        comparisons.push([k, j + 1 + middle])
        comparisons.push([k, j + 1 + middle])
        comparisons.push([k, rightArr[j]])
        arr[k] = rightArr[j];
        k++;
        j++;
    } 
}

export default function timSort(array) {
    let comparisons = [];
    let arr = array.slice()
    let n = arr.length;
    let run = minRunLength(n);

    // Sort elements in the subarray of size run
    for (let i=0; i < n; i += run) {
        insertionSort(arr, i, Math.min((i + run - 1), (n - 1)), comparisons);
    }

    // merge starts from size run (or 32), merging to form size 64, then 128, etc
    for (let size = run; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {

            // Find ending point of left sub array 
            // mid+1 is starting point of right sub array
            let mid = left + size - 1;
            let right = Math.min((left + 2 * size - 1), (n-1));

            // merge sub array arr[left....mid] & arr[mid+1....right]
            if (mid < right) {
                merge(arr, left, mid, right, comparisons)
            }
        }
    }
    return comparisons;
}