let express = require('express');
let bodyParser = require('body-parser');
// let expressValidator = require('express-validator');
let mustache = require('mustache-express');
let app = express();

let list = [];
let finished = [];

app.engine('mustache', mustache());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());

app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function (req, res){
  res.render('index', { list: list, finished: finished});
});

app.post('/', function (req, res){
  list.push(req.body.todoText);
  res.redirect('/');
});

app.post('/add', function (req, res){
  finished.push(req.body.done);
  res.redirect('/');
});




app.listen(3000, function () {
  console.log('Successfully started express application!');
});
