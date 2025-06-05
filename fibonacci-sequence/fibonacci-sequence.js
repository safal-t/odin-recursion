function fibs(number) {
    const sequence = [0, 1];
    for (let i = 2; i < number; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}


function fibsRec(number, array = [0, 1]) {
    if (number === 0) {
        return
    }
    array.push(array.at(-1) + array.at(-2))
    return array.push(fibs(number - 1))
}

console.log(fibsRec(8))