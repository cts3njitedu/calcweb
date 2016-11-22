var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {

    var expression = {
        expression: '5+6^(5-4)-8'
    }

    request({
        uri: "https://calctree.herokuapp.com/calculate",
        method: "POST",
        json: expression,
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    }, function (error, response, body) {
        console.log(body);
    });
    res.send("I like chicken");


});

module.exports = router;
