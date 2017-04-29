var express = require('express');
var router = express.Router();
var voiceProvider = require('../providers/voiceProvider');
var multer = require('multer');
var upload = multer({dest: './uploads/_tmp/'});
//var upload = multer({inMemory: true});

console.log('Init Voice Controller');
// Save a Voice
router.post('/api/announcement/:announcementId/voice', upload.array('audio', 2), function (req, res, next) {
    voiceProvider.create(req, function (err, doc) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(doc));
    });
});

// Get voicesByAnnouncement
router.get('/api/announcement/:announcementId/voice', function (req, res) {
    voiceProvider.getVoicesByAnnouncement(req.params.announcementId, req.query, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    });
});

// set Converted
router.put('/api/voices/:voiceId/converted', function (req, res) {
    voiceProvider.setStatus(req.params.voiceId, "converted", function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({announcements: docs}));
    })
});

// Get voices
router.get('/api/voice', function (req, res) {
    var filters = {};
    voiceProvider.getAnnouncements(filters, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    });
});

// Get Voice
router.get('/api/voices/:voiceId', function (req, res) {
    voiceProvider.getAnnouncement(req.params.voiceId, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({announcements: docs}));
    })
});

module.exports = router;