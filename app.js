var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set up templete engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(1200);
console.log('you are listining to port 1200');
