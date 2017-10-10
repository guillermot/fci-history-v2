'use strict';

const fr = require('./crawlers/fr-fci');

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

module.exports.crawlFr = (event, context, callback) => {
  fr.crawler().then(result => {
    console.log('------------crawlFr---------------');
    console.log(result);
    console.log('------------/crawlFr---------------');

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        result: result
      }),
    };

    callback(null, response);
  }).catch(err=>console.log(err));
};
