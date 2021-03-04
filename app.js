require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const statusRoutes = require('./routes/status');

const port = process.env.PORT || 8080;
const app = express();

const env = process.env.ENV || 'Unknown';
const allowLocalhost = ['dev', 'Unknown'].includes(env);

const corsOption = {
  origin(origin, callback) {
    const validateOrigin = (origin) || ' ';
    if ((!origin || allowLocalhost)) {
      callback(null, true);
    } else {
      console.log(`Attemped to provide a response to origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(allowLocalhost ? cors() : cors(corsOption));
app.use(bodyParser.json({ limit: '600mb' }));
app.use(bodyParser.urlencoded({ limit: '600mb', extended: true }));

app.use('/api/', statusRoutes);

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
