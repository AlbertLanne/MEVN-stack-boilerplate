const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// MIDDLEWARE

app.use(bodyParser.json());
app.use(cors());

const products = require('./server/routes/api/informations');


// Le lien avec le serveur d'api   ==>  http://localhost:4000/api/products
app.use('/api/products', products);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server listening on ${port}`));
