const baseUrl = 'https://q9cdz9r88k.execute-api.us-east-1.amazonaws.com/dev';
const getFciData = () => {
    const url = baseUrl + '/fci?start_date=20171018&end_date=20171020&group=fr';

    return fetch(url)
        .then(response => response.json());
};

module.exports.getFciData = getFciData;
