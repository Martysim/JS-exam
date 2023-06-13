

const arrOfBookObj = [
    {
        title: "litle Prince",
        author: "Antoan",
        numberOfPages: 92
    },
    {
        title: "test 1",
        author: "Boris",
        numberOfPages: 20
    },
    {
        title: "test 2",
        author: "Marian",
        numberOfPages: 34
    },
];



const sortBookByPages = (arrBook) => {
    return arrBook.sort((a, b) => a.numberOfPages - b.numberOfPages);
};

console.log(sortBookByPages(arrOfBookObj));
