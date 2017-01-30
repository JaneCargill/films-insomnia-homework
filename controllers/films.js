//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var express = require('express');
var filmRouter = express.Router();


filmRouter.get('/api/films', function(req, res) {
  res.json(films);
})

filmRouter.get('/api/films/:id', function(req, res) {
  res.json({data: films[req.params.id]});
})

filmRouter.post('/api/films', function(req, res) {
  films.push(req.body.film);
  res.json({data: films});
})

filmRouter.put('/api/films/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

filmRouter.put('/api/films/:id/review', function(req, res) {
  films[req.params.id].addReview(req.body.review);
  res.json({data: films});
});

filmRouter.delete('/api/films/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({data: films});
});

module.exports = filmRouter;