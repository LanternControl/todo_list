let express = require('express');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let mustache = require('mustache-express');
let data = require('./data.js');
let app = express();

app.engine('mustache', mustache());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.set('views', '/views');
app.set('view engine', 'mustache');

app.get('/', function (req, res) {
   res.render('index', data);
});

app.post('/', function (req, res){
  data.push(req.body.data);
  res.redirect('/');
});




app.listen(3000, function () {
  console.log('Successfully started express application!');
});
