//create express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

//express server
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//get server routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

//run server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});