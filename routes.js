'use strict';

var express = require('express');
var router = express.Router();

router.get("/templates", function (req, res) {
    res.json({response: "Templates that you wanted"});
});

router.get("/templates/:id", function (req, res) {
    res.json({response: "Template that you wanted"});
});

module.exports = router;