//DO NOT TOUCH THESE
const express = require('../../__lib__/express');
//DO NOT TOUCH THESE


//DO NOT TOUCH THESE
app.simulateRequest('GET', '/');
app.simulateRequest('POST', '/', {body: {"testing": "testing",}})
module.exports = app;
//DO NOT TOUCH THESE