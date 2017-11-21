const moment = require('moment');
const baseUrl = 'https://q9cdz9r88k.execute-api.us-east-1.amazonaws.com/dev';
const getFciData = (startDate, endDate, group, fci) => {


    const url = baseUrl + '/fci?start_date=' + moment(startDate).format('YYYYMMDD') + '&end_date=' + moment(endDate).format('YYYYMMDD') + '&group=' + group;
    // return new Promise(function (success) {
    //     success([{ "daily-variation": "0.21", "date": "20171017", "currency": "U$S", "createdDate": "2017-10-17T09:00:04+00:00", "monthly-variation": "0.6", "fci": "FBA RDoPlA", "group": "fr", "price": "1035,521", "description": "FBA RENTA FIJA DOLAR PLUS A", "id": "1f3cd37c-4bd3-041a-2053-fe16e52e2377" }, { "daily-variation": "0.01", "date": "20171010", "currency": "U$S", "createdDate": "2017-10-10T18:40:37+00:00", "monthly-variation": "0.37", "fci": "FBA RDoPlA", "group": "fr", "price": "1032,638", "description": "FBA RENTA FIJA DOLAR PLUS A", "id": "4ebe54a2-7580-f883-d300-dec135fc1d22" }, { "daily-variation": "-0.02", "date": "20171011", "currency": "U$S", "createdDate": "2017-10-11T09:00:02+00:00", "monthly-variation": "0.34", "fci": "FBA RDoPlA", "group": "fr", "price": "1032,396", "description": "FBA RENTA FIJA DOLAR PLUS A", "id": "48ec50eb-5745-e7ae-b4b6-65739b8dee58" }, { "daily-variation": "0.05", "date": "20171013", "currency": "U$S", "createdDate": "2017-10-13T09:00:04+00:00", "monthly-variation": "0.4", "fci": "FBA RDoPlA", "group": "fr", "price": "1033,332", "description": "FBA RENTA FIJA DOLAR PLUS A", "id": "90accdaa-d309-6fad-985b-93e7e50c26e3" }, { "daily-variation": "0.02", "date": "20171018", "currency": "U$S", "createdDate": "2017-10-18T09:00:04+00:00", "monthly-variation": "0.56", "fci": "FBA RDoPlA", "group": "fr", "price": "1035,747", "description": "FBA RENTA FIJA DOLAR PLUS A", "id": "e23ace1b-5d96-be1e-d77d-38df9a810a36" }, { "daily-variation": "0.05", "date": "20171019", "currency": "U$S", "createdDate": "2017-10-19T09:00:03+00:00", "monthly-variation": "0.58", "fci": "FBA RDoPlA", "group": "fr", "price": "1036,220", "description": "FBA RENTA FIJA DOLAR PLUS A", "id": "280ee0da-b8d1-7b66-4a6b-fbe52bee8242" }, { "daily-variation": "-0.03", "date": "20171020", "currency": "U$S", "createdDate": "2017-10-20T09:00:02+00:00", "monthly-variation": "0.58", "fci": "FBA RDoPlA", "group": "fr", "price": "1035,945", "description": "FBA RENTA FIJA DOLAR PLUS A", "id": "2d07bf2e-6345-8b9c-6cd2-f40fb7457706" }, { "daily-variation": "0.04", "date": "20171012", "currency": "U$S", "createdDate": "2017-10-12T09:00:03+00:00", "monthly-variation": "0.39", "fci": "FBA RDoPlA", "group": "fr", "price": "1032,814", "description": "FBA RENTA FIJA DOLAR PLUS A", "id": "b6323c83-c57e-05c5-8bf6-9ad0efc73833" }]);
    // });
    return fetch(url)
        .then(response => response.json());
};

module.exports.getFciData = getFciData;
