const books = [{
    id: 1,
    name: 'Harry Potter and the Goblet of Fire',
    genre: 'Fictional Novel',
    author: 'Joanne K. Rowling',
    published_on: new Date('July 8, 2000'),
    isbn: '9788893819930',
    rating: 4
}, {
    id: 2,
    name: 'Miss Peregrine\'s Home for Peculiar Children',
    genre: 'Fictional Novel',
    author: 'Ransom Riggs',
    published_on: new Date('June 7, 2011'),
    isbn: '9780316245289',
    rating: 3
},
{
    id: 3,
    name: 'The Hobbit',
    genre: 'Fictional Novel',
    author: 'John Ronald Reuel Tolkien',
    published_on: new Date('September 21, 1937'),
    isbn: '9780345445605',
    rating: 5
}];

module.exports = {
    books,
}