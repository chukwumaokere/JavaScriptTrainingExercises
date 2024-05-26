// DO NOT TOUCH THIS
const { Client } = require ('../__lib__/utils');
// DO NOT TOUCH THIS

// Testing your ability to use the postgres `pg` npm package and write SQL queries
// getAllBooks - Use the Client above to run a query that returns all the books from the `books` table
// getBookByID - Use the client above to run a query that returns a book from the `books` table given a specific book ID
// getPerfectBooks - Use the client above to run a query that returns all the books from the `books` table that have a rating of 5

async function getAllBooks() {
    const client = new Client();

    try {
        
    } catch (e) {
        
    } finally {
        
    }   
}

async function getBookByID() {
    
}

async function getPerfectBooks() {

}


// Fix these
// Extra credit, get them to run properly and log the results
getAllBooks().then( => {
    console.log();
}).catch(error => {
    console.error('Unhandled error:', error);
});


getBookByID(3).then( => {
    console.log();
}).catch(error => {
    console.error('Unhandled error:', error);
});

getPerfectBooks().then().catch();

// DO NOT TOUCH THESE
module.exports = {
    getAllBooks,
    getBookByID
}
// DO NOT TOUCH THESE