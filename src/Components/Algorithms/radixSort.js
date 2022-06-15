

function getMax(array, n) {
    let mx = array[0];
    for (let i=0; i < n; i++) {
        if (array[i] > mx) {
            mx = array[i];
        }
    }
    return mx;

}

function countSort(array, exp, animations) {
    const size = array.length;
    let output = new Array(size)
    let count = new Array(10);

    // const count with zeros
    for (let i = 0; i < 10; i++) {
        count[i] = 0
    }
    // Calulcate count of elements
    for (let i = 0; i < size; i++) {
        let index = Math.floor(array[i] / exp);
        count[index % 10]++;
    }

    // Get cumulative count 
    for (let j = 1; j < count.length; j++) {
        count[j] += count[j-1];
    }

    // place the elements in sorted order
    for (let i = size-1; i >= 0; i--) {
        output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
        count[Math.floor(array[i] / exp) % 10]--;
    }

    for (let i = 0; i < size; i++) {
        array[i] = output[i];
        animations.push([i]);
        animations.push([i]);
        animations.push([i, array[i]]);
    }
    return animations;
}

export default function radixSort(arr) {
    let animations = [];
    let array = arr.slice();
    const n = array.length;
    const maxNum = getMax(array, n);
    for (let exp = 1; Math.floor(maxNum / exp) > 0; exp*=10) {
        countSort(array, exp, animations);
    }
    return animations
}

