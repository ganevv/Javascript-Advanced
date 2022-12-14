function areaAndVolumeCalculator(areaIn, volIn, input) {

    const data = JSON.parse(input)
    const result = []

    for (const cube of data) {
        const curr = {
            area: areaIn.call(cube),
            volume: volIn.call(cube)
        }
        result.push(curr)
    }
    return result
}

areaAndVolumeCalculator(area, vol, `[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]`)

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};