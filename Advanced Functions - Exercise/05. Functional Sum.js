function functionalSum(n) {

    const inner = function (a) {
        n += a
        return inner
    }
    inner.toString = function () {
        return n
    }
    return inner
}

functionalSum(1)
functionalSum(1)(6)(-3)