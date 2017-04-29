var express = require('express');
var router = express.Router();
var userProvider = require('../providers/userProvider');

console.log('Init User Controller');
// Save a User
router.post('/api/user', function (req, res) {
    userProvider.create(req.body, function (err, doc) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(doc));
    });
});

router.post('/api/user/login', function (req, res) {
    userProvider.validatePassword(req.body.userName, req.body.password, function (err, doc) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(doc));
    });
});

// Get voices
router.get('/api/user', function (req, res) {
    var filters = {};
    userProvider.getUsers(filters, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    });
});

// Get User
router.get('/api/user/:userId', function (req, res) {
    userProvider.getUser(req.params.userId, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({announcements: docs}));
    })
});

module.exports = router;