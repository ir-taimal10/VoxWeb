// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Load credentials
AWS.config.update({
    accessKeyId: process.env.VOX_SERVICES_ACCESS_KEY_ID,
    secretAccessKey: process.env.VOX_SERVICES_SECRET_KEY,
    region: 'us-west-2'
});
// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});


var params = {
    DelaySeconds: 10,
    QueueUrl: process.env.VOX_QUEUE_URL,
    MessageBody: "Voice to process"
};

exports.putMessage = function (message) {
    if(process.env.VOX_QUEUE_URL){
        params.MessageBody = message;
        sqs.sendMessage(params, function (err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("queueManagerProvider : putMessage : OK", data.MessageId);
            }
        });
    }
};