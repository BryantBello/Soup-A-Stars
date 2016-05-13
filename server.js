var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Sequelize = require('sequelize');
var passport = require('passport');
var strategy = require('./setup-passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var app = express();
var PORT = process.env.PORT || 3000;
var staticContentFolder;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

staticContentFolder = __dirname + '/app';
app.use(express.static(staticContentFolder));


// GET method route
app.get('/home', function (req, res) {
  res.sendFile(path.join(staticContentFolder + '/public/index.html'));
});

// GET method route
app.get('/restaurant', function (req, res) {
  res.sendFile(path.join(staticContentFolder + '/public/restaurant.html'));
});







app.listen(PORT,function(){
	console.log('Serving static content from ' + staticContentFolder)
	console.log('App listening on PORT: ' + PORT);
});


/*sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
 // console.log(jane.get({
    plain: true
  }));
}); */