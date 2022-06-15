
export default function bubbleSort(arr) {
    let array = arr.slice()
    const n = array.length
    const animations = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j+1], array[j]] = [array[j], array[j+1]]
                animations.push([j+1, j])
                animations.push([j+1, j])
                animations.push([j, array[j], j+1, array[j+1]])
            }
        }
    }
    return animations
}