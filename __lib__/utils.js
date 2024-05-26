const { Client } = require('./pg');
const { express } = require('./express')

function safeImport(modulePath) {
    try {
        return require(modulePath);
    } catch (error) {
        //console.error(`Error importing module ${modulePath}:`, error);
        return {};
    }
}

function safeCall(fn, ...args) {
    try {
        return fn(...args);
    } catch (error) {
        //console.error(`Error calling function ${fn.name}:`, error);
        return undefined;
    }
}

module.exports = { safeImport, safeCall };

module.exports = {
    Client,
    express,
    safeImport,
    safeCall
}