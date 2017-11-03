const services = require('./app/services.js');
const dailyVariation = require('./app/components/daily-variation-tr.js');

const container = document.querySelector('#daily-variation > tbody');
const data = services.getFciData();
dailyVariation.loadData(container, data);
// console.log(dailyVariation);

