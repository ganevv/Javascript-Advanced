window.addEventListener('load', solve)

function solve() {

    let sendButton = document.querySelector('form button')
    sendButton.addEventListener('click', sendInfo)
    let clearButton = document.querySelector('#completed-orders button')
    clearButton.addEventListener('click', clear)

    let productType = document.querySelector('#type-product')
    let descriptionText = document.querySelector('#description')
    let clientName = document.querySelector('#client-name')
    let clientPhone = document.querySelector('#client-phone')

    let receivedOrders = document.querySelector('#received-orders')
    let completedOrders = document.querySelector('#completed-orders')


    function sendInfo(e) {
        e.preventDefault()

        let productTypeValue = productType.value
        let descriptionValue = descriptionText.value
        let clientNameValue = clientName.value
        let clientPhoneValue = clientPhone.value

        if (productTypeValue == '' || descriptionValue == '' || clientNameValue == '' || clientPhoneValue == '') {
            return
        }

        productType.value = ''
        descriptionText.value = ''
        clientName.value = ''
        clientPhone.value = ''

        let containerDiv = document.createElement('div')
        containerDiv.classList.add('container')

        let h2Element = document.createElement('h2')
        h2Element.textContent = `Product type for repair: ${productTypeValue}`

        let h3Element = document.createElement('h3')
        h3Element.textContent = `Client information: ${clientNameValue}, ${clientNameValue}`

        let h4Element = document.createElement('h4')
        h4Element.textContent = `Description of the problem: ${descriptionValue}`

        let startButton = document.createElement('button')
        startButton.classList.add('start-btn')
        startButton.textContent = `Start Repair`

        let finishButton = document.createElement('button')
        finishButton.classList.add('finish-btn')
        finishButton.textContent = `Finish Repair`
        finishButton.disabled = true

        startButton.addEventListener('click', startRepair)
        finishButton.addEventListener('click', finishRepair)

        containerDiv.appendChild(h2Element)
        containerDiv.appendChild(h3Element)
        containerDiv.appendChild(h4Element)
        containerDiv.appendChild(startButton)
        containerDiv.appendChild(finishButton)
        receivedOrders.appendChild(containerDiv)
    }
    function startRepair(e) {
        e.currentTarget.disabled = true
        e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false
    }

    function finishRepair(e) {
        let containerDiv = e.currentTarget.parentNode
        e.currentTarget.remove()
        containerDiv.querySelector('.start-btn').remove()
        containerDiv.remove()
        completedOrders.appendChild(containerDiv)
    }

    function clear(e) {
        let allContainers = Array.from(e.currentTarget.parentNode.querySelectorAll('.container'))
        for (const container of allContainers) {
            container.remove()
        }
    }
}