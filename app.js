
const searchBook = () => {

    //get search field's information 
    const searchBook = document.getElementById("searchBook");
    const searchBookText = searchBook.value;
    searchBook.value = "";


    //  Fetching URL
    const url = `http://openlibrary.org/search.json?q=${searchBookText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => authorName(data.docs))
}



const authorName = author => {

    for (const auth of author) {
        console.log(auth);

        // console.log(auth.author_key.length ? auth.author_key[0] : "undefined");
        if (typeof auth.author_key === 'undefined') {
            let authorKey = "Undefined";
            const url2 = `https://openlibrary.org/authors/${authorKey}.json`
            fetch(url2)
                .then(res => res.json())
                .then(author => console.log(author.name));
        }
        else {
            let authorKey = auth.author_key[0];
            const url2 = `https://openlibrary.org/authors/${authorKey}.json`
            fetch(url2)
                .then(res => res.json())
                .then(author => console.log(author.name));
        }
    }
}



