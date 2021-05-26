'use strict';

const AWS = require('aws-sdk');

const sqs = new AWS.SQS();

module.exports.sqsMessage = (event, context, callback) => {
  const params = {
    MessageBody: 'Hola',
  };

  // sqs.sendMessage(params, (err, data) => {
  //   if (err) {
  //     console.log('Error', err);
  //   } else {
  //     console.log(data);
  //   }
  // });
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };
  console.log(event);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
