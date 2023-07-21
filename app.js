const express = require('express');
const bodyParser = require('body-parser');
const boardRouters = require('./routes/routes')
const app = express();

app.use(bodyParser.json())

app.use('/board',boardRouters)

app.listen(3000,() => {
  console.log('3000 on')
})