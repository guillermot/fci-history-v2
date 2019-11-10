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

// Crawlers
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

// API
module.exports.getData = (event, context, callback) => {

  // For debug purposes
  // const start_date = event.start_date;
  // const end_date = event.end_date;
  // const group = event.group;
  // const description = event.description;
  // const fci = event.fci;

  const start_date = event.queryStringParameters['start_date'];
  const end_date = event.queryStringParameters['end_date'];
  const group = event.queryStringParameters['group'];
  const description = event.queryStringParameters['description'];

  const query = {
    TableName: 'fci-history',
    FilterExpression: '#group = :group and #date between :start_date and :end_date',
    ExpressionAttributeNames: {
      '#date': 'date',
      '#group': 'group'
    },
    ExpressionAttributeValues: {
      ':start_date': start_date,
      ':end_date': end_date,
      ':group': group
    }
  };

  docClient.scan(query, (err, data) => {
    let response = {};
    if (err) {
      response.statusCode = 500;
      response.body = err;
    }
    else {
      response.statusCode = 200;
      response.body = JSON.stringify(data.Items);
    }

    response.headers = { "Access-Control-Allow-Origin": "*" };

    callback(null, response);
  });
}

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