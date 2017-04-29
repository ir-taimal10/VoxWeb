var Redis = require('ioredis');
var redis;
if (process.env.VOX_REDIS_URL) {
    redis = new Redis(6379, process.env.VOX_REDIS_URL);
}


exports.get = function (key, done) {
    if (redis) {
        redis.get(key, function (err, result) {
            console.log('cacheManagerProvider:  result from REDIS: key: ', key + ' value:' + result);
            done(JSON.parse(result));
        });
    }else{
        done(null);
    }
};

exports.set = function (key, value) {
    if (redis) {
        console.log('cacheManagerProvider:  set value REDIS: ', key + ' value:' + value);
        redis.set(key, JSON.stringify(value));
    }
};