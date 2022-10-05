function argumentInfo() {

    const types = {}
    const array = Array.from(arguments)

    for (let arg of array) {
        const type = typeof arg
        console.log(`${type}: ${arg}`);

        if (types[type] == undefined) {
            types[type] = 0
        }
        types[type]++
    }
    const result = Object.entries(types).sort((a, b) => b[1] - a[1])

    for (let  [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })