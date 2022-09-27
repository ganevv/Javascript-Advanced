function extractIncreasingSubsequenceFromArray(arr) {

    let res = []
    let biggest = arr[0]

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (element >= biggest) {
            res.push(element)
            biggest = element
        }
    }
    return res;
}

extractIncreasingSubsequenceFromArray([1, 2, 3, 4])