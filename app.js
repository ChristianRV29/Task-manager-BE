require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Task-Manager-BE');
})

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});

/**
 * 
const corsOptions = {
  origin: (origin, callback) => {
    log.info(`origin: ${origin}`);
    const validateOrigin = (origin) || ' ';
    if ((validateOrigin.match(regex)) || (!origin || allowLocalhost)) {
      callback(null, true);
    } else {
      log.warn(`Attempted to provide a response to origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
};
 */

