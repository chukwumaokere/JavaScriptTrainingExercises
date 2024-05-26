// DO NOT TOUCH THIS
const { Client } = require ('../__lib__/utils');
// DO NOT TOUCH THIS

// Use the Client above to run a query that returns all the books from the `books` table

async function getAllBooks() {
    const client = new Client();

    try {
        
    } catch (e) {
        
    } finally {
        
    }   
}

async function getBookByID() {
    
}


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



// DO NOT TOUCH THESE
module.exports = {
    getAllBooks,
    getBookByID
}
// DO NOT TOUCH THESE