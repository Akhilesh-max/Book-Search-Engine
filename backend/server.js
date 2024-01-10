const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const bookController = require('./routes/api/bookController')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));
app.use('/', bookController);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));