const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const PORT = 3434;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes, () => {
});

app.listen(PORT, () => {
  console.log('API is listening on port: http://localhost:', PORT);
});