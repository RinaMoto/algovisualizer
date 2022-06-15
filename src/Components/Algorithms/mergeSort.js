

function mergeHelper(
    mainArray,
    startIndex,
    endIndex,
    auxiliaryArray, 
    animations
) {
    if (startIndex === endIndex) {
        return;
    }

    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
    mergeHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}

function doMerge (
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animations) {
        let k = startIndex;
        let i = startIndex;
        let j = middleIndex + 1;
        while (i <= middleIndex && j <= endIndex) {

            animations.push([i, j]);
            animations.push([i, j]);
            if (auxiliaryArray[i] <= auxiliaryArray[j]) {
                animations.push([k, auxiliaryArray[i]]);
                mainArray[k++] = auxiliaryArray[i++];
            } else {
                animations.push([k, auxiliaryArray[j]]);
                mainArray[k++] = auxiliaryArray[j++];
            }
        }
        while (i <= middleIndex) {
            animations.push([i, i]);
            animations.push([i, i]);
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }
        while (j <= endIndex) {
            animations.push([j, j])
            animations.push([j, j])
            animations.push([k, auxiliaryArray[j]])
            mainArray[k++] = auxiliaryArray[j++];
        }

}

function MergeSort(unsortedArray) {
    const animations = [];

    // Base case: if array is less or equal to one, no sorting
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const auxiliaryArray = unsortedArray.slice();
    mergeHelper(unsortedArray, 0, unsortedArray.length - 1, auxiliaryArray, animations)
    return animations;
}

export default MergeSort;