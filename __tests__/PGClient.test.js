const { safeImport, safeCall } = require('../__lib__/utils');

const { getAllBooks, getBookByID, getPerfectBooks } = safeImport('../PGClient');
const { books } = require('../__lib__/data');

describe('All Tests Should Pass - queries are set up correctly', () =>{
    test('getAllBooks returns all books', async () => {
        const result = await safeCall(getAllBooks);
        expect(result).toEqual(books)
    });

    test('getBookByID returns a single books: 3', async () => {
        const result = await safeCall(getBookByID, 2);
        const bookWithID3 = books.find(item => item.id === 2);
        expect(result).toEqual(bookWithID3)
    })

    test('getBookByID returns a single books: 1', async () => {
        const result = await safeCall(getBookByID, 1);
        const bookWithID1 = books.find(item => item.id === 1)
        expect(result).toEqual(bookWithID1)
    })

    test('getPerfectBooks returns books that have a rating of 5', async () => {
        const result = await safeCall(getPerfectBooks);
        const perfectBooks = books.map(item => {
            if (item.rating === 5) {
                return item;
            }}).filter(item => item);
        expect(result).toEqual(perfectBooks)
    })
})