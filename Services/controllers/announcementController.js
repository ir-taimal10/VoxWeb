var express = require('express');
var router = express.Router();
var announcementProvider = require('../providers/announcementProvider');

console.log('Init Announcement Controller');
// Submit a Announcement
router.post('/api/user/:userId/announcement', function (req, res) {
    announcementProvider.create(req.params.userId, req.body, function (err, doc) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(doc));
    });
});

// Get announcementsByUser
router.get('/api/user/:userId/announcement', function (req, res) {
   announcementProvider.getAnnouncementsByUser(req.params.userId, req.query, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    });
});


// Get announcements
router.get('/api/announcement', function (req, res) {
    var filters = {};
    announcementProvider.getAnnouncements(filters, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    });
});

// Get Announcement
router.get('/api/announcement/:announcementId', function (req, res) {
    announcementProvider.getAnnouncement(req.params.announcementId, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    })
});

// update Announcement
router.put('/api/announcement/:announcementId', function (req, res) {
    announcementProvider.updateAnnouncement(req.params.announcementId, req.body, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    })
});

// delete Announcement
router.delete('/api/announcement/:announcementId', function (req, res) {
    announcementProvider.deleteAnnouncement(req.params.announcementId, function (err, docs) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs));
    })
});

module.exports = router;