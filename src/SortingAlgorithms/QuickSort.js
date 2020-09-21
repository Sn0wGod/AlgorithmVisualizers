export function getQuickSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    quickSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log("sort works correctly? ",arraysAreEqual(javaScriptSortedArray, auxillaryArray));
    array = auxillaryArray;
    return [animations, array];
}

function quickSort(auxillaryArray, startIndex, endIndex, animations) {
    let pivotIndex;
    if (startIndex < endIndex) {
        pivotIndex = partitionArray(auxillaryArray, startIndex, endIndex, animations);
        quickSort(auxillaryArray, startIndex, pivotIndex - 1, animations);
        quickSort(auxillaryArray, pivotIndex + 1, endIndex, animations);
    }
}

function partitionArray(auxillaryArray, startIndex, endIndex, animations) {
    let pivot= auxillaryArray[endIndex];
    let i=startIndex-1;
    for(let j = startIndex; j < endIndex; ++j) {
        animations.push(["comparision1", j, endIndex]);
        animations.push(["comparision2", j, endIndex]);
        if(auxillaryArray[j] <= pivot) {
            animations.push(["comparision1", j, i+1]);
            animations.push(["swap", j, auxillaryArray[i+1]]);
            animations.push(["swap", i+1, auxillaryArray[j]]);
            animations.push(["comparision2", j, i+1]);
            i++;
            swap(auxillaryArray, j, i);
        }
    }
    animations.push(["comparision1", i+1, endIndex]);
    animations.push(["swap", endIndex, auxillaryArray[i+1]]);
    animations.push(["swap", i+1, auxillaryArray[endIndex]]);
    animations.push(["comparision2", i+1, endIndex]);
    
    swap(auxillaryArray, i+1, endIndex);
    return i+1;
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}

function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
}