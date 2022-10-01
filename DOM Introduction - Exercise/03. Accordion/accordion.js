function toggle() {
    let textEl = document.getElementById('extra')
    let button = document.getElementsByClassName('button')[0]

    if (button.textContent == 'More') {
        button.textContent = 'Less'
        textEl.style.display = 'block'
    } else {
        button.textContent = 'More'
        textEl.style.display = 'none'
    }
}