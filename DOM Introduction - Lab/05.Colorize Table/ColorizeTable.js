function colorize() {
    const rows = document.querySelectorAll('tr')

    for (let index = 1; index < rows.length; index += 2) {
        rows[index].style.background = 'teal'
    }
}