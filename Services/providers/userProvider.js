var persistence = require('../persistence/persistence');
var dataHelper = require('../helpers/dataHelper');
var cacheManager = require('../providers/cacheManagerProvider');
var DATABASE = 'users';

function getResultComparison(password, storedPassword) {
    if (storedPassword && storedPassword === password) {
        return {result: "ok"};
    } else {
        return {result: "fail"};
    }
}

exports.create = function (data, done) {
    //var userGuid = dataHelper.getGuid();
    data.id = data.userName;

    //Create user publicRegister
    persistence.save(DATABASE, data, function (err, doc) {
        if (err) console.log('Unable to connect to CouchDB');
        if (doc.error) console.log('Unable to save the announcement');
        done(null, doc);
    });
};

exports.validatePassword = function (userName, password, done) {
    var key = DATABASE + "/" + userName;
    cacheManager.get(key, function (data) {
        if (data) {
            done(null, getResultComparison(password, data.password));
        } else {
            persistence.request('GET', key, "", function (err, data) {
                if (err) return done('Unable to connect to CouchDB', err);
                if (data.error) return done('Unable to get the' + DATABASE, {result: data.error});
                console.log('Provider: ' + DATABASE + ': data: ', data.userName);
                cacheManager.set(key, data);
                done(null, getResultComparison(password, data.password));
            })
        }
    });
};

exports.getUsers = function (filters, done) {
    persistence.request('GET', DATABASE, filters, function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the announcements');
        console.log('Provider: ' + DATABASE + ': total_rows: ', data.total_rows);
        done(null, data.rows)
    })
};

exports.getUser = function (userId, done) {
    persistence.request('GET', DATABASE + "/" + userId, {}, function (err, data) {
        if (err) return done('Unable to connect to CouchDB');
        if (data.error) return done('Unable to get the announcements');
        console.log('Provider: ' + DATABASE + ': total_rows: ', data.total_rows);
        done(null, data.rows)
    })
};