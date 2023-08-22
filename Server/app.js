const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();
const { client, connectToMongoDB, connectMongoose } = require('./db/connection');

console.log(process.env.SECRET_KEY_JWT);

app.use(cors());
app.use(bodyParser.json());

connectMongoose();

app.get('/', (req, res) => {
    res.send('Hello World!')
}
);

app.use('/auth', authRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
);
