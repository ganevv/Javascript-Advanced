function equalNeighbors(matrix) {

    let counter = 0

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        for (let collIndex = 0; collIndex < matrix[rowIndex].length - 1; collIndex++) {
            if (matrix[rowIndex][collIndex] === matrix[rowIndex][collIndex + 1]) {
                counter++
            }
        }
    }

    const rowSize = matrix[0].length

    for (let collIndex = 0; collIndex < rowSize; collIndex++) {
        for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
            if (matrix[rowIndex][collIndex] === matrix[rowIndex + 1][collIndex]) {
                counter++
            }
        }
    }
    console.log(counter);
}

equalNeighbors([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']])