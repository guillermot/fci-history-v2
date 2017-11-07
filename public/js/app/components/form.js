const moment = require('moment');
const metadata = require('./form-metadata.js');
const services = require('../services.js');
const dailyVariation = require('./daily-variation-tr.js');
const loadChartjs = require('./chart.js');

const container = document.querySelector('#daily-variation > tbody');
const startDate = '20171001';
const endDate = '20171020';

const getParams = () => {
    const group = document.querySelector('#groups');
    const fci = document.querySelector('#fcis');
    const startDateControl = document.querySelector('#startDate');
    const endDateControl = document.querySelector('#endDate');
    
    return {
        startDate: moment(startDateControl.value).toDate(),
        endDateControl: moment(endDateControl.value).toDate(),
        group: group.value,
        fci: fci.value
    };
};

const loadData = (params) => {
    services.getFciData(params.startDate, params.endDate, params.group, params.fci)
        .then(result => {
            result.sort((a, b) => {
                return a.date - b.date;
            });

            loadChartjs.loadChart(result);
        }).catch(err => {
            console.log(err);
        });
};

const loadDropdown = (ddl, obj) => {
    for (var key in obj) {
        const option = document.createElement('option');
        option.value = key;
        option.innerText = obj[key];

        ddl.appendChild(option);
    }
};

const loadForm = () => {
    const groups = document.querySelector('#groups');
    const fcisDropDown = document.querySelector('#fcis');
    const startDateControl = document.querySelector('#startDate');
    const endDateControl = document.querySelector('#endDate');

    startDateControl.value = moment().add(-10, 'days').format('YYYY-MM-DD');
    endDateControl.value = moment().format('YYYY-MM-DD');

    loadDropdown(groups, metadata.groups);

    groups.addEventListener('change', (event) => {
        loadDropdown(fcisDropDown, metadata.fcis[event.target.value]);

        const params = getParams();
        params.group = event.target.value;
        loadData(params);
    });

    const selectedGroup = groups.value;

    loadDropdown(fcisDropDown, metadata.fcis[selectedGroup]);

    fcisDropDown.addEventListener('change', (event) => {
        const params = getParams();
        params.fci = event.target.value;
        loadData(params);
    });

    startDateControl.addEventListener('blur', (event) => {
        const params = getParams();
        params.startDate = event.target.value;
        loadData(params);
    });

    endDateControl.addEventListener('blur', (event) => {
        const params = getParams();
        params.endDate = event.target.value;
        loadData(params);
    });
    const params = getParams();
    loadData(params);
};

module.exports.loadForm = loadForm;
