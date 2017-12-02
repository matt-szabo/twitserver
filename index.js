require('dotenv').config()
var express = require('express');
const cors = require('cors');


var app = express();



var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'RRzuKJ8e1aYWOqfRnT2hw3ElO',
  consumer_secret: 'felmPUeexpqtoCJRpEtokbjv6iFTVr0H1JTRxiPwFKD7hPZeJP',
  access_token_key:'18653387-l3KNVQICrNKHf1LaYaD0uJfQ6FG4UB4yzfUjUgDoO',
  access_token_secret: 'Mtix9uTvGbycs5FHJZuyLYmSFPgNUP5wlXWwqbVaQ474a',
});

app.use(cors());

app.get('/', function(req, res){

var handle = req.param('id');


var params = {screen_name: handle};

client.get('statuses/user_timeline', params).then(function(tweets, response) {
  
res.send(tweets);

}, function(err, response) {
  console.log(err);
}).then(function() {
  console.log(handle + 'sent');
});


});





app.listen(process.env.PORT || 4000);