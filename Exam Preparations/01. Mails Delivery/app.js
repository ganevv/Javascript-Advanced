window.addEventListener("load", solve)

function solve() {
    let input = {
        receipt: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message'),
    }
    let lists = {
        listOfMails: document.getElementById('list'),
        sentMails: document.querySelector('.sent-list'),
        deletedMails: document.querySelector('.delete-list'),
    }
    document.getElementById('add').addEventListener('click', add)
    document.getElementById('reset').addEventListener('click', reset)

    function add(e) {
        e.preventDefault()

        const receipt = input.receipt.value
        const title = input.title.value
        const message = input.message.value

        if (receipt == '' || title == '' || message == '') {
            return
        }
        const li = document.createElement('li')
        li.className = 'list-mails'
        li.innerHTML =
            `<h4>Title: ${title}</h4>
        <h4>Recipient Name: ${receipt}</h4>
        <span>${message}</span>
        <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
        </div>`

        input.receipt.value = ''
        input.title.value = ''
        input.message.value = ''

        lists.listOfMails.appendChild(li)

        li.querySelector('#send').addEventListener('click', send)
        li.querySelector('#delete').addEventListener('click', deletePress)

        function send() {
            lists.sentMails.appendChild(li)
            li.innerHTML =
                `<span>To: ${receipt}</span>
                <span>Title: ${title}</span>
                <div class="btn">
                    <button type="submit" class="delete">Delete</delete>
                </div>`
            li.querySelector('.delete').addEventListener('click', deletePress)
        }

        function deletePress() {
            lists.deletedMails.appendChild(li)
            li.innerHTML = `<span>To: ${receipt}</span>
                <span>Title: ${title}</span>`
        }
    }

    function reset(e) {
        e.preventDefault()
        input.receipt.value = ''
        input.title.value = ''
        input.message.value = ''
    }
}