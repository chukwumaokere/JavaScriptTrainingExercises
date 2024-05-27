// DO NOT TOUCH THIS
const { Client } = require ('../../__lib__/utils');
// DO NOT TOUCH THIS

// Testing your ability to use the postgres `pg` npm package and write SQL queries
// getAllBooks - Use the Client above to run a query that returns all the books from the `books` table
// getBookByID - Use the client above to run a query that returns a book from the `books` table given a specific book ID
// getPerfectBooks - Use the client above to run a query that returns all the books from the `books` table that have a rating of 5

async function getAllBooks() {
    const client = new Client({connectionString: 'fakeconnection'});
    try {
        await client.connect();
        const res = await client.query('SELECT * FROM books');
        return res;
    } catch (e) {
        console.error(e);
    } finally {
        await client.end();
    }   
}

async function getBookByID(id) {
    const client = new Client({connectionString: 'fakeconnection'});
    try {
        await client.connect();
        const res = await client.query(`SELECT * FROM books WHERE id = ${id}`);
        return res;
    } catch (e) {
        console.error(e);
    } finally {
        await client.end();
    }   
}

async function getPerfectBooks() {
    const client = new Client({connectionString: 'fakeconnection'});
    try {
        await client.connect();
        const res = await client.query(`SELECT * FROM books WHERE rating = 5`);
        return res;
    } catch (e) {
        console.error(e);
    } finally {
        await client.end();
    }
}

// Fix these
// Extra credit, get them to run properly and log the results
getAllBooks().then(result => {
    console.log(result);
}).catch(error => {
    console.error('Unhandled error:', error);
});

getBookByID(3).then(result => {
    console.log(result);
}).catch(error => {
    console.error('Unhandled error:', error);
});

getPerfectBooks().then(result => {
    console.log(result);
}).catch(error => {
    console.error('Unhandled error:', error);
});

// DO NOT TOUCH THESE
module.exports = {
    getAllBooks,
    getBookByID,
    getPerfectBooks,
}
// DO NOT TOUCH THESE