var express = require('express');
var getToken = require('../services/github-service');

var router = express.Router();
router.post('/', function (req, res, next) {
  getToken(req.body.code)
    .then(response => res.json(response.data))
    .catch(e => res.status(500).set('Access-Control-Allow-Origin', '*').json({ e: e.message }));
});

module.exports = router;
