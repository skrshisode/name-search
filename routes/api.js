var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var response = { "version": "1.0.0" }
    res.json(response);
});

router.get('/search', function(req, res, next) {
	var q = req.query.q;
	var data = req.app.locals.db.search(q);

    var response = {
        "q" : q,
        "data": data
    };
    res.json(response);
});

module.exports = router;