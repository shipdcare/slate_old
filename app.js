'use strict';

var express = require('express');
var parser = require('body-parser').json;
var logger = require('morgan');

var routes = require('./routes');

var app = express();

app.use(logger("dev"));
app.use(parser());
app.use("/api", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message
    });
});

var port = process.env.port || 3000;

app.listen(port, function () {
    console.log("Server listening on port "+ port);
});