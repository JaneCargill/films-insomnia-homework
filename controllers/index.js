var express = require('express');
var router = express.Router();

router.use(require('./films.js'));

// router.get('/', function(req, res) {
//   res.json({ data: 'HI!'});
// });

module.exports = router;