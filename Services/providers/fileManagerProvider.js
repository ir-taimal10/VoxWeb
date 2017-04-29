// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials and set region
AWS.config.update({
    accessKeyId: process.env.VOX_SERVICES_ACCESS_KEY_ID,
    secretAccessKey: process.env.VOX_SERVICES_SECRET_KEY
});
// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});
var fs = require('fs');
var path = require('path');


function getRepository() {
    if (process.env && process.env.VOX_USE_FILE_SERVER) {
        return path.join('Z:', 'files');
    }
    return path.join(__dirname, '..', '..', '..', 'cron', 'files');
}


function saveFileInS3(file, key, done) {
    var uploadParams = {
        Bucket: process.env.VOX_BUCKET_NAME,
        Key: '',
        Body: '',
        ACL: 'public-read'
    };
    var fileStream = fs.createReadStream('./uploads/_tmp/' + file.filename);
    fileStream.on('error', function (err) {
        console.log('File Error', err);
    });
    uploadParams.Body = fileStream;
    uploadParams.Key = 'repository/original/' + key;

    // call S3 to retrieve upload file to specified bucket
    s3.upload(uploadParams, function (err, data) {
        if (err) {
            console.log("Error", err);
        }
        if (data) {
            console.log("Filemanager : saveFileInS3 : OK ", data.Location);
        }
        fs.unlink('./uploads/_tmp/' + file.filename);
        done(data.Location);
    });
};


function saveFileInLocalSystem(file, key, done) {
    var filePath = path.join(getRepository(), 'voices', key);
    //add file to the folder
    //var tempPath = path.join(getRepository(), '_tmp', file.filename);
    fs.createReadStream('./uploads/_tmp/' + file.filename)
        .pipe(fs.createWriteStream(filePath));
    //deelte tmp file
    fs.unlink('./uploads/_tmp/' + file.filename);
    done(filePath);
};


exports.saveFile = function (file, key, done) {
    if (process.env && process.env.VOX_SERVICES_ACCESS_KEY_ID && process.env.VOX_SERVICES_SECRET_KEY) {
        saveFileInS3(file, key, done);
    } else {
        saveFileInLocalSystem(file, key, done);
    }
};