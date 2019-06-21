const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// MIDDLEWARE

app.use(bodyParser.json());
app.use(cors());

const products = require('./server/routes/api/informations');

app.use('/api/informations', products);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server listening on ${port}`));
