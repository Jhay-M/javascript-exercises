const getTheTitles = (books => {
    const array = books.map(book => {
        return book.title;
    })
    return array;
});

module.exports = getTheTitles;
