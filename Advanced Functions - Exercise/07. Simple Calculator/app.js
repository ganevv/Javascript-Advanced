function calculator() {

    let field1 = null
    let field2 = null
    let result = null

    return {
        init,
        add,
        subtract,
    }
    function init(f1, f2, fr) {
        field1 = document.querySelector(f1)
        field2 = document.querySelector(f2)
        result = document.querySelector(fr)
    }
    function add() {
        result.value = +field1.value + +field2.value
    }
    function subtract() {
        result.value = +field1.value - +field2.value
    }
}