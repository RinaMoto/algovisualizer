


export default function heapSort(array) {
    let n = arr.length
    const animations = [];
    let swapPoint = 0;
    const arr = array.slice()
    // build max heap
    for (let i = Math.floor((n / 2) - 1); i > -1; i--) {
        heapify(arr, n, i, animations)
    }

    swapPoint = animations.length
    for (let i = (n - 1); i > 0; i--) {
        // swap
        [arr[i], arr[0]] = [arr[0], arr[i]]
        animations.push([i, 0])
        animations.push([i, 0])
        animations.push([i, arr[i], 0, arr[0]]);
        // heapify
        heapify(arr, i, 0, animations)
    }
    console.log(animations, swapPoint)
    return [animations, swapPoint];
}

function heapify(array, n, i, animations) {
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    // left child: 2i+1
    // right child: 2i+2
    if (left < n && array[largest] < array[left]) {
        largest = left;
    }
    if (right < n && array[largest] < array[right]) {
        largest = right;
    }

    if (largest !== i) {
        [array[largest], array[i]] = [array[i], array[largest]]
        animations.push([largest, i])
        animations.push([largest, i])
        animations.push([i, array[i], largest, array[largest]])
        heapify(array, n, largest, animations);
    }
}
