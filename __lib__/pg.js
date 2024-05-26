const { books } = require('./data');

class Client {
    /**
     * 
     * @param {{host?: string, username?: string, password?: string, port?: string, connectionString?: string}} options - The connection details for the database or connection string. Example: connectionString: `postgres://user:pass@localhost:5432/dbname`
     */
    constructor(options) {
        if (options.connectionString) {
            this.connection = options.connectionString;
        } else {
            this.connection = options;
        }
    }

    #connected = false;
    
    /**
     * This establishes a connection to the database at the provided connection `options` or `connectionString`
     */
    async connect() {
        return new Promise((res, rej) => {
            if (!this.connection) {
                rej('Connection details missing');
            }
            if (this.#connected) {
                rej('Please avoid connecting twice. Client is already connected.')
            }
            setTimeout(() => {
                this.#connected = true;
                res('Connected!')
            }, 500);
        })
    }

    /**
     * This runs a given query and returns the result as JSON. A valid connection must be made before 
     * @param {string} query 
     * @returns {Promise<object | object[]>} results
     */
    async query(query) {
        return new Promise((resolve, reject) => {
            let result;
            if (!this.#connected || !this.connection) reject('No connection found to make a query call. Try running client.connect() before running a query');
            
            const regex = /FROM\s+(\w+)/i;
            let table = query.match(regex);
            if (!table) {
                return reject(`SYNTAX ERROR: unexpected character near "SELECT"`);
            }

            table = table[1];
            if (table !== 'books') {
                return reject(`Error: relation "${table}" does not exist`)
            }

            if (query.toLowerCase().includes('where')) {
                const regex = /WHERE\s+id\s*=\s*(\d+)/i;
                const match = query.match(regex);
                if (match) {
                    const id = parseInt(match[1], 10);
                    const book = books.find((item) => item.id === id) || [];
                    result = book;
                }
            } else {
                result = books;
            }
            return setTimeout(() => resolve(result), 500);
        });
    }

    /**
     * This ends the connection to make sure there arent any hung clients!
     */
    async end() {
        return new Promise((resolve, reject) => {
            this.#connected = false;
            resolve('Connection terminated')
        })
    }
}

module.exports = {
    Client,
}