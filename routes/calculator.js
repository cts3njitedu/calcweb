var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.post('/', function (req, res, next) {

   
    request({
        uri: "https://calctree.herokuapp.com/calculate",
        method: "POST",
        json: req.body,
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    }, function (error, response, body) {
       
        if(error){
            res.status(500).send(error);
        }
        else{
            
            res.status(200).send(body);
        }
    });
   


});

module.exports = router;
