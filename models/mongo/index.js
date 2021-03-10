const mongoose = require('mongoose');
const log = require('../../utils/logger');

const URI = process.env.MONGOOSE_URI
  ? process.env.MONGOOSE_URI
  : 'mongodb://localhost:27017/task-manager';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { connection } = mongoose;

connection.once('open', () => {
  log.info('MongoDB connected');
});

