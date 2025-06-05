function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any leftovers
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
