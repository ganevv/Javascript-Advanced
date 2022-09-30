function extractText() {
    const items = Array.from(document.querySelectorAll('li'))
    const res = items.map(e => e.textContent).join('\n')
    document.getElementById('result').value = res
}