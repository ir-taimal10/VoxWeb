var express = require('express');
var router = express.Router();
var dbCreator = require('../db/dbCreator');


console.log('Init DB Util Controller');

// Get voices
router.get('/api/dbutil/create', function (req, res) {
    var result = {
        value: "The DBs users, announcements and voices has been successfully created"
    };
    dbCreator.createDB();
    res.send(JSON.stringify(result));
});


module.exports = router;