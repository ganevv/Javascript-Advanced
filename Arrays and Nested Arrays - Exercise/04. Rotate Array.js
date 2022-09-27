function rotateArray(arr, num) {

    for (index = 0; index < num; index++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4'],
    2)