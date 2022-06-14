


export default function heapSort(arr) {
    let n = arr.length
    const animations = [];
    const swapAnimations = [];
    // build max heap
    for (let i = Math.floor((n / 2) - 1); i > -1; i--) {
        heapify(arr, n, i, animations)
    }

    for (let i = (n - 1); i > 0; i--) {
        // swap
        swapAnimations.push([i, arr[0]]);
        swapAnimations.push([0, arr[i]]);
        [arr[i], arr[0]] = [arr[0], arr[i]]

        // heapify
        heapify(arr, i, 0, swapAnimations)
    }
    console.log(animations, swapAnimations)
    return [animations, swapAnimations];
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
        animations.push([largest, array[largest]])
        animations.push([i, array[i]])
        heapify(array, n, largest, animations);
    }
}
