function sortingNumbers(array) {

    let res = []
    array.sort((a, b) => b - a)

    while (array.length != 0) {
        res.push(array.pop())
        res.push(array.shift())
    }
    return res
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])