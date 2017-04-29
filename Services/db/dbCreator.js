var request = require('request');
var url = process.env.VOX_COUCHDB_URL || 'http://admin:admin@127.0.0.1:5984';
var dbUtil = {};
dbUtil.runDBRequest = function (method, url, body, done) {
    console.log('DB Util : ' + method + ' : ' + url);
    request({
            url: url,
            json: true,
            body: body,
            method: method
        },
        function (err, resp, body) {
            if (err) {
                console.log('DB Util : Unable to connect CouchDB');
                done(err);
                return;
            }
            if (body.ok) {
                console.log('DB Util : ' + method + ' : ' + url + '  [OK]');
                done(body);
                return;
            }
            done();
            console.log('DB Util : Unable to ' + method + ' the ' + url);
        }
    );
};

var userView = {
    "_id": "_design/voicesDesignDoc",
    "views": {"by_userName": {"map": "function (doc) {\n  emit(doc.userName, doc);\n}"}},
    "language": "javascript"
};
var announcementView = {
    "_id": "_design/voicesDesignDoc",
    "views": {
        "by_owner": {"map": "function (doc) {\n  emit([doc.owner, doc.timeStamp], doc);\n}"},
        "by_publicUrl": {"map": "function (doc) {\n  emit([doc.publicUrl, doc.timeStamp], doc);\n}"}
    },
    "language": "javascript"
};
var voiceView = {
    "_id": "_design/voicesDesignDoc",
    "views": {"by_creation_date": {"map": "function (doc) {\n  emit([doc.announcementId, doc.timeStamp], null);\n}"}},
    "language": "javascript"
};
exports.createDB = function (){
    dbUtil.runDBRequest('DELETE', url + '/users', null, function () {
        dbUtil.runDBRequest('PUT', url + '/users', null, function () {
            dbUtil.runDBRequest('PUT', url + '/users/_design/DesignedDocs', userView, function () {
            });
        });
    });
    dbUtil.runDBRequest('DELETE', url + '/announcements', null, function () {
        dbUtil.runDBRequest('PUT', url + '/announcements', null, function () {
            dbUtil.runDBRequest('PUT', url + '/announcements/_design/DesignedDocs', announcementView, function () {
            });
        });
    });
    dbUtil.runDBRequest('DELETE', url + '/voices', null, function () {
        dbUtil.runDBRequest('PUT', url + '/voices', null, function () {
            dbUtil.runDBRequest('PUT', url + '/voices/_design/DesignedDocs', voiceView, function () {
            });
        });
    });
};






