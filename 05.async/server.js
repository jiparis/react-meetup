var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var bodyParser = require('body-parser');
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

// API
var nextId = 0;
var todoList = [
  { id: nextId++, todo: 'Learn react', done: false },
  { id: nextId++, todo: 'Buy a beer for Jose I.', done: false }
];

app.get('/todos', function(req, res) {
  res.send(todoList);
});

app.post('/todos', function(req, res) {
  todoList.unshift({
    id: nextId++,
    todo: req.body.todo,
    done: req.body.done
  });
  res.sendStatus(200);
});

app.put('/todos/:id', function(req, res){
  var found = todoList.find(function(item){ return item.id == req.params.id; });
  if (found){
    found.done = req.body.done;
    res.sendStatus(200);
  }
  else {
    console.log("Not found! " + req.params.id);
    res.sendStatus(400);
  }
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
