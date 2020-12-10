const getTheTitles = function(arr) {
    let bookList = [];
    arr.forEach(book => {
        bookList.push(book.title);
    });
    return bookList;
}

module.exports = getTheTitles;
