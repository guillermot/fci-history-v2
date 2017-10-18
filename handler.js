'use strict';
const aws = require('aws-sdk');
const fr = require('./crawlers/fr-fci');
const fim = require('./crawlers/fim-fci')
const moment = require('moment');

const docClient = new aws.DynamoDB.DocumentClient({ region: 'us-east-1' });

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.crawlFim = (event, context, callback) => {
  fim.crawler().then(result => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        result: result
      }),
    };

    save(result, 'fim');

    callback(null, response);
  }).catch(err => console.log(err));
};

module.exports.crawlFr = (event, context, callback) => {
  fr.crawler().then(result => {

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        result: result
      }),
    };

    save(result, 'fr');

    callback(null, response);
  }).catch(err => console.log(err));
};

function save(result, group) {
  const date = moment().format("YYYYMMDD");
  const dateTime = moment().format();

  for (var i = 0; i < result.length; i++) {
    const item = result[i];
    const id = guid();

    item.id = id;
    item.date = date;
    item.createdDate = dateTime;
    item.group = group;
    const params = {
      Item: item,
      TableName: 'fci-history'
    };

    docClient.put(params, function (err, data) {
      if (err) {
        console.log(err);
      }
    });
  }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}