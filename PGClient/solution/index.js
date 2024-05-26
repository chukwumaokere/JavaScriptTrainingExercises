// DO NOT TOUCH THIS
const { Client } = require ('../../lib/utils');
// DO NOT TOUCH THIS

// Use the Client above to run a query that returns all the books from the `books` table

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

// DO NOT TOUCH THESE
module.exports = {
    getAllBooks,
    getBookByID
}
// DO NOT TOUCH THESE