
const searchBook = () => {

    //get search field's information 
    const searchBook = document.getElementById("searchBook");
    const searchBookText = searchBook.value;
    searchBook.value = "";
    console.log(searchBookText);

    //  Fetching URL
    const url = `http://openlibrary.org/search.json?q=${searchBookText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = (bookName) => {

    const displayResult = document.getElementById('displaySearchResult')


    bookName.forEach(Book => {

        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `<div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${Book.cover_i}-M.jpg" class="card-img-top img-fluid h-75" alt="...">
            <div class="card-body text-center">
                <h4 class="card-title">${Book.title}</h4>
                <h5 class="card-title"></h5>
                <h5 class="card-title">${Book.publisher}</h5>
                <h5 class="card-title">${Book.first_publish_year}</h5>
                <div>
                    <button onclick='' type="button" class="btn btn-primary">Team Detail</button>
                </div>
            </div>
    </div>`;


        displayResult.appendChild(div);
    });
}


