var express = require('express');

var photos = require("../data/photos.json")

var router = express.Router();

router.get('/', function (req, res, next) {
  res.json(photos.photos);
});
router.get('/:id', function (req, res, next) {
  let { id } = req.params
  res.json(photos.photos.find(p => p.id === parseInt(id)));
});

module.exports = router;
