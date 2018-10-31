const express = require('express');
const app = express();
const { Room } = require('./db/schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../../dist')))

app.get('/room/:id', function(req, res) {
  const { id } = req.params;
  Room.find({ id }).then(rooms => res.send(rooms[0]));
  //templating needed to inject roomid into html somehow, for now, front end sends get request with id to
  //to get data; fix later !!!!!!
});

app.listen(4000, function() {
  console.log('port is up on port 4000');
});