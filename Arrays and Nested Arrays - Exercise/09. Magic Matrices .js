function magicMatrices(arr) {

    let isMagical = true

    for (let index = 0; index < arr.length - 1; index++) {
        let sumRowOne = arr[index].reduce((a, b) => a + b, 0)
        let sumRowTwo = arr[index + 1].reduce((a, b) => a + b, 0)
        let sumColOne = 0
        let sumColTwo = 0
        for (let j = 0; j < arr.length; j++) {
            sumColOne += arr[index][j]
            sumColTwo += arr[index + 1][j]
        }

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            isMagical = false
        }
    }
    return isMagical
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))