require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();

const env = process.env.ENV || 'Unknown';
const allowLocalhost = ['dev', 'Unknown'].includes(env);

const corsOption = {
    origin: function (origin, callback) {
        const validateOrigin = (origin) || ' ';
        if ((!origin || allowLocalhost)) {
            callback(null, true);
        } else {
            console.log(`Attemped to provide a response to origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    }
}

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Task-Manager-BE');
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});



