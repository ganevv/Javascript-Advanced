window.addEventListener('load', solve);

function solve() {
    let input = {
        genre: document.getElementById('genre'),
        nameOfSong: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    }
    let lists = {
        collection: document.getElementById('all-hits'),
        saved: document.getElementById('saved-hits'),
        likes: document.getElementById('total-likes'),
    }

    let addBtn = document.getElementById('add-btn').addEventListener('click', add)

    function add(e) {
        e.preventDefault()

        const genre = input.genre.value
        const nameOfSong = input.nameOfSong.value
        const author = input.author.value
        const date = input.date.value

        if (genre == '' || nameOfSong == '' || author == '' || date == '') {
            return
        }

        const div = document.createElement('div')
        div.classList.add('hits-info') 
        div.innerHTML = `<img src="./static/img/img.png">
        <h2>Genre: ${genre}</h2>
        <h2>Name: ${nameOfSong}</h2>
        <h2>Author: ${author}</h2>
        <h3>Date: ${date}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>`

        input.genre.value = ''
        input.nameOfSong.value = ''
        input.author.value = ''
        input.date.value = ''

        let attach = document.getElementsByClassName('all-hits-container')[0]
        attach.appendChild(div)


        div.querySelector('.save-btn').addEventListener('click', save)
        div.querySelector('.like-btn').addEventListener('click', like)
        div.querySelector('.delete-btn').addEventListener('click', deleteFromCollection)

        function like() {
            let likes = document.querySelector('.likes p').textContent.split(" ")
            likes[2] = 100
        }
        function save() {
            lists.saved.appendChild(div)
            div.innerHTML = `<img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${nameOfSong}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="delete-btn">Delete</button>`

            div.querySelector('.delete-btn').addEventListener('click', deleteFromSaved)
        }
        function deleteFromCollection() {
            attach.removeChild(div)
        }
        function deleteFromSaved() {
            lists.saved.removeChild(div)
        }
    }
}