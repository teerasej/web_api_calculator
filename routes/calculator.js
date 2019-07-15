var express = require('express');
var router = express.Router();


let responseWarnNaN = (res) => {
    res.json({
        message: 'Both input should be number'
    })
}

let isNotNumber = (value) => {
    return isNaN(value);
}

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({
        service: 'calculator'
    });
});

router.post('/plus', (req, res, next) => {

    var first = req.body.first;
    var second = req.body.second;

    if(isNotNumber(first) || isNotNumber(second)) {
        responseWarnNaN(res);
    } else {
        res.json({
            result: first + second
        });
    }
});

router.post('/subtract', (req, res, next) => {

    var first = req.body.first;
    var second = req.body.second;

    if(isNotNumber(first) || isNotNumber(second)) {
        responseWarnNaN(res);
    } else {
        res.json({
            result: first - second
        });
    }
    
});

router.post('/multiply', (req, res, next) => {

    var first = req.body.first;
    var second = req.body.second;

    if(isNotNumber(first) || isNotNumber(second)) {
        responseWarnNaN(res);
    } else {
        res.json({
            result: first * second
        });
    }

    
});

router.post('/divide', (req, res, next) => {
    res.status(501);
    res.json({
        status: "not implemented"
    });
});

module.exports = router;
