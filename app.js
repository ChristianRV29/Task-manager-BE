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

app.use(allowLocalhost ? cors(): cors(corsOption));
app.use(bodyParser.json({ limit: '600mb' }));
app.use(bodyParser.urlencoded({ limit: '600mb', extended: true }));


app.get('/', (req, res) => {
    res.status(200).send(`Welcome to Task-Manager-BE, please add "/api/docs" in the URL to make use of the endpoints.`);
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});



