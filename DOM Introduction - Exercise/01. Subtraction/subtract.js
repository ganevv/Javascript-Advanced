function subtract() {
    const firstElementValue = document.getElementById('firstNumber').value
    const secondElementValue = document.getElementById('secondNumber').value
    let resultElement = document.getElementById('result')

    resultElement.textContent = +firstElementValue - +secondElementValue
}