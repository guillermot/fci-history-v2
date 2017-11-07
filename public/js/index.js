const services = require('./app/services.js');
const dailyVariation = require('./app/components/daily-variation-tr.js');
const loadChartjs = require('./app/components/chart.js');

const container = document.querySelector('#daily-variation > tbody');
services.getFciData()
    .then(result => {
        dailyVariation.loadData(container, result);
        loadChartjs.loadChart(result);
    }).catch(err => {
        console.log(err);
    });

// console.log(dailyVariation);

