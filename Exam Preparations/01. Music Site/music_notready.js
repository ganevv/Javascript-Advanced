function solve() {
    let button = document.getElementById("add-btn");
    button.addEventListener('click',(add) => {
        add.preventDefault()    ;
        let div = document.createElement('div');
        div.classList.add('hits-info');
        let genre = document.getElementById("genre");
        let name = document.getElementById("name");
        let author = document.getElementById("author");
        let date = document.getElementById("date");
        let h2_1 = document.createElement('h2');
        let h2_2 = document.createElement('h2');
        let h2_3 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let saveBtn = document.createElement('button');
        let likeBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        let img = document.createElement('img');
        let allHits = document.getElementsByClassName("all-hits-container")[0]
 
        genre = 'Genre: ' + genre.value;
        name = 'Name: ' + name.value;
        author = 'Author: ' + author.value;
        date = 'Date: ' + date.value;
        img.src = './static/img/img.png';
        h2_1.textContent = genre;
        h2_2.textContent = name;
        h2_3.textContent = author;
        h3.textContent = date;
        saveBtn.classList.add('save-btn');
        likeBtn.classList.add('like-btn');
        deleteBtn.classList.add('delete-btn');
        saveBtn.textContent = 'Save song';
        likeBtn.textContent = 'Like song';
        deleteBtn.textContent = 'Delete';
 
        div.appendChild(img);
        div.appendChild(h2_1);
        div.appendChild(h2_2);
        div.appendChild(h2_3);
        div.appendChild(h3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);
        allHits.appendChild(div);
 
        document.getElementById("genre").value = '';
        document.getElementById("name").value = '';
        document.getElementById("author").value = '';
        document.getElementById("date").value = '';
 
        saveBtn.addEventListener('click',(save) => {
            let currentDiv = saveBtn.parentNode;
 
            currentDiv.removeChild(saveBtn);
            currentDiv.removeChild(likeBtn);
            let copy = currentDiv.cloneNode(true);
            let copyDelBtn = copy.querySelector('.delete-btn');
            copyDelBtn.addEventListener('click',function(){
                copyDelBtn.parentElement.parentElement.removeChild(copyDelBtn.parentElement);
            })
            let savedSongs = document.querySelector('.saved-container');
            savedSongs.appendChild(copy);
            currentDiv.parentElement.removeChild(currentDiv);
        })
        likeBtn.addEventListener('click',(like) => {
            let likes = document.querySelector('.likes p').textContent.split(" ");
            like[2] = Number(likes[2]);
            likes[2]++;
            document.querySelector('.likes p').textContent = likes.join(' ');
            likeBtn.setAttribute('disabled',true);
        })
        deleteBtn.addEventListener('click',function(){
            deleteBtn.parentElement.parentElement.removeChild(deleteBtn.parentElement);
        })
    })
}