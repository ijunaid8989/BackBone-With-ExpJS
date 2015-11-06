var express = require('express')
  , path = require('path')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , http = require('http')
  , port = process.env.PORT || '3000';


var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var dbUrl = "library"
  , collections = ["books"]
  , mongojs = require("mongojs");

var db = mongojs(dbUrl,collections);



app.get('/books', function(req,res){
  db.books.find({},function(err,books){
    if (err) return;
    var response = {
      books: books
    }
    res.json(response);
  });
});

app.use('/', routes);



//createServer
var server = http.createServer(app);

server.listen(port);

