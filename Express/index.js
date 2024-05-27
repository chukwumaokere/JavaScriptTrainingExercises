// Make it so that there are 2 route handlers that can handle a GET / and POST /.
// GET should just return status 200 with a body of "OK"
// POST should return status 200 and the body should be the input the user sent in the POST request

//DO NOT TOUCH THESE
const express = require('../../__lib__/express');
//DO NOT TOUCH THESE

/** Write your code in this block   */







/** Write your code in this block  */


//DO NOT TOUCH THESE
app.simulateRequest('GET', '/');
app.simulateRequest('POST', '/', {body: {"testing": "testing",}})
module.exports = app;
//DO NOT TOUCH THESE