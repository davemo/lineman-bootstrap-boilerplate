var express            = require('express'), 
    request            = require('request'),
    app                = express.createServer();

app.configure(function() {
  app.use(express.static(process.cwd() + "/generated"));
  app.use(express.bodyParser());
  app.use(express.errorHandler());
});

app.get('/animals', function(req, res) { 
  res.json([
    { name: 'Dog' },
    { name: 'Cat' },
    { name: 'Mouse' }
  ]);
});

module.exports = app;
