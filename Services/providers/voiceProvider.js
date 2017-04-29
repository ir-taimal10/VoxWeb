var persistence = require('../persistence/persistence');
var dataHelper = require('../helpers/dataHelper');
var fileManager = require('../providers/fileManagerProvider');
var queueManager = require('../providers/queueManagerProvider');
var querystring = require('querystring');
var path = require('path');
var DATABASE = 'voices';
var repositoryUrl = process.env.VOX_CLOUDFRONT_URL || process.env.VOX_BUCKET_URL;

exports.create = function (req, done) {
    var origin = req.get('origin');
    var voiceGuid = dataHelper.getGuid();
    var data = req.body;
    data.id = voiceGuid;
    data.announcementId = req.params.announcementId;
    data.creationDate = new Date();
    data.voiceName = voiceGuid + "." + req.body.email;

    //Create voice Register
    this.createVoiceFile(req, voiceGuid, function (fileUrl) {
        console.log("Provider: voiceFile  created " + fileUrl);
        var fileToProcess = {
            id: data.id,
            name: data.voiceName,
            extension: path.extname(fileUrl)
        };
        if (repositoryUrl) {// use cloud front or s3 directly
            data.convertedUrl = repositoryUrl + "/repository/converted/" + data.voiceName + ".mp3";//This url should only be used from front
            data.originalUrl = repositoryUrl + "/repository/original/" + data.voiceName + fileToProcess.extension;//This url should only be used from front
            //data.originalUrl = fileUrl;//This url should only be used from front
        } else {// use NFS
            data.convertedUrl = origin + "/repository/converted/" + voiceGuid + "." + req.body.email + ".mp3";
            data.originalUrl = origin + "/repository/voicesOri/" + voiceGuid + "." + req.body.email + fileToProcess.extension;
        }

        persistence.save(DATABASE, data, function (err, doc) {
            if (err) return done('Unable to connect to CouchDB');
            if (doc.error) return done('Unable to save the announcement');
            done(null, doc)
        });
        queueManager.putMessage(JSON.stringify(fileToProcess));
    });

};
exports.createVoiceFile = function (req, voiceId, done) {
    for (var x = 0; x < req.files.length; x++) {
        var file = req.files[x];
        if (file && file.originalname) {
            var key = voiceId + "." + req.body.email + path.extname(file.originalname);
            fileManager.saveFile(file, key, done);
        }
    }
};

exports.getVoicesByAnnouncement = function (announcementId, query, done) {
    var voicesByAnnouncementView = DATABASE + '/_design/DesignedDocs/_view/by_creation_date';
    var filters = 'endkey=%5B%22' + announcementId + '%22%5D&startkey=%5B%22' + announcementId + '%22,%7B%7D%5D&include_docs=true&descending=true';
    filters += '&' + querystring.stringify(query);
    persistence.request('GET', voicesByAnnouncementView, filters, function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the announcements');
        console.log('Provider: ' + DATABASE + ': total_rows: ', data.total_rows);
        done(null, data.rows)
    })
};

exports.setStatus = function (voiceId, status, done) {
    persistence.request('GET', DATABASE + "/" + voiceId, '', function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the ' + DATABASE);
        data.status = status;
        persistence.save(DATABASE, data, function (err, doc) {
            if (err) return done('Unable to connect to CouchDB');
            if (doc.error) return done('Unable to save the announcement');
            done(null, doc)
        });
    });
};

exports.getVoices = function (filters, done) {
    persistence.request('GET', DATABASE, filters, function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the announcements');
        console.log('Provider: ' + DATABASE + ': total_rows: ', data.total_rows);
        done(null, data.rows)
    })
};

exports.getVoice = function (voiceId, done) {
    persistence.request('GET', DATABASE + "/" + voiceId, {}, function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the announcements');
        console.log('Provider: ' + DATABASE + ': total_rows: ', data.total_rows);
        done(null, data.rows)
    })
};