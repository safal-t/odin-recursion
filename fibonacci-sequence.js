function fibs(number) {
    const sequence = [0, 1];
    for (let i = 2; i < number; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


function fibsRec(number, array = [0, 1]) {
    array.push(array.at(-1) + array.at(-2))
    if (array.length >= number) {
        return array
    }
    array.push(array.at(-1) + array.at(-2));
    return fibsRec(number, array)
}

console.log(fibs(8))
console.log(fibsRec(8))