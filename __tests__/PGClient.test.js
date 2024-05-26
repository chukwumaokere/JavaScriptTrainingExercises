const { getAllBooks, getBookByID } = require('../PGClient');
const { books } = require('../__lib__/data');

describe('queries are set up correctly', () =>{
    test('getAllBooks returns all books', async () => {
        const result = await getAllBooks();
        expect(result).toEqual(books)
    });

    test('getBookByID returns a single books', async () => {
        const result = await getBookByID(3);
        expect(result).toEqual(books.find(item => item.id === 3))
    })
})