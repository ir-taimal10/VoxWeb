var persistence = require('../persistence/persistence');
var dataHelper = require('../helpers/dataHelper');
var querystring = require('querystring');
var DATABASE = 'announcements';

exports.create = function (userId, data, done) {
    var announcementGuid = dataHelper.getGuid();
    data.id = announcementGuid;
    data.creationDate = new Date();
    //Create announcements register
    persistence.save(DATABASE, data, function (err, doc) {
        if (err) console.log('Unable to connect to CouchDB');
        if (doc.error) console.log('Unable to save the announcement');
        done(null, doc);
    });
};

exports.getAnnouncementsByUser = function (userId, query, done) {
    var announcementsByOwnerView = DATABASE + '/_design/DesignedDocs/_view/by_owner';
    var filters = 'endkey=%5B%22' + userId + '%22%5D&startkey=%5B%22' + userId + '%22,%7B%7D%5D&include_docs=true&descending=true';
    filters += '&' + querystring.stringify(query);
    persistence.request('GET', announcementsByOwnerView, filters, function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the announcements');
        console.log('Provider: ' + DATABASE + ': total_rows: ', data.total_rows);
        done(null, data.rows)
    })
};

exports.getAnnouncements = function (filters, done) {
    persistence.request('GET', DATABASE, filters, function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the announcements');
        console.log('Provider: ' + DATABASE + ': total_rows: ', data.total_rows);
        done(null, data.rows)
    })
};

exports.getAnnouncement = function (announcementId, done) {
    var announcementsByPublicUrl = DATABASE + '/_design/DesignedDocs/_view/by_publicUrl';
    var filters = 'startkey=%5B%22' + announcementId + '%22%5D&endkey=%5B%22' + announcementId + '%22,%7B%7D%5D&include_docs=true';
    persistence.request('GET', announcementsByPublicUrl, filters, function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the announcements');
        console.log('Provider: ' + DATABASE + ': total_rows: ', data.total_rows);
        done(null, data.rows[0])
    })
};

exports.updateAnnouncement = function (announcementId, data, done) {
    var announcementUrl = DATABASE + "/" + announcementId;
    persistence.save(DATABASE, data, function (err, doc) {
        if (err) return done('Unable to connect to CouchDB');
        if (doc.error) return done('Unable to delete the announcement');
        done(null, doc)
    });
};

exports.deleteAnnouncement = function (announcementId, done) {
    var announcementUrl = DATABASE + "/" + announcementId;
    persistence.request('GET', announcementUrl, '', function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the ' + DATABASE);

        persistence.request('DELETE', announcementUrl, "rev=" + data._rev, function (err, doc) {
            if (err) return done('Unable to connect to CouchDB');
            if (doc.error) return done('Unable to delete the announcement');
            done(null, doc)
        });
    });
};