

function quickSort(array, low, high, animations) {
    if (low < high) {
        let pi = partition(array, low, high, animations)
        // before pi number
        quickSort(array, low, pi - 1, animations)
        // after pi number
        quickSort(array, pi + 1, high, animations)
    }
    return animations
}


function partition(array, low, high, animations) {
    const pivot = array[high]
    let i = (low - 1)
    for (var j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]]
            animations.push([i, j])
            animations.push([i, j])
            animations.push([i, array[i], j, array[j]])
        }
    }
    
    [array[i+1], array[j]] = [array[j], array[i+1]]
    animations.push([i+1, j])
    animations.push([i+1, j])
    animations.push([i+1, array[i+1], j, array[j]])
    return (i + 1)
}


export default function quickSortStart(array) {
    const low = 0
    const high = array.length - 1
    const animations = []
    const arr = array.slice()
    quickSort(arr, low, high, animations)
    return animations;
}