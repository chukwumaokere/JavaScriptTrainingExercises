//DO NOT TOUCH THESE
const express = require('../../__lib__/express');
//DO NOT TOUCH THESE

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    return res.send('OK');
});

app.post('/', (req, res) => {
    return res.json(req.body);
});

app.listen(4000, (port) => {
    console.log(`App listening on port: ${port}`);
});

//DO NOT TOUCH THESE
console.log(app);
app.simulateRequest('GET', '/');
app.simulateRequest('POST', '/', {body: {"testing": "testing",}})
module.exports = app;
//DO NOT TOUCH THESE