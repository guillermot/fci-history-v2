const moment = require('moment');
const metadata = require('./form-metadata.js');
const services = require('../services.js');
const chartjs = require('./chart.js');

const startDate = '20171001';
const endDate = '20171020';

const getParams = () => {
    const fcisArr = [];
    const group = document.querySelector('#groups');
    const fci = document.querySelector('#fcis');
    const startDateControl = document.querySelector('#startDate');
    const endDateControl = document.querySelector('#endDate');
    const fcis = document.querySelectorAll('[name=fci]');

    for (let i = 0; i < fcis.length; i++) {
        if (fcis[i].checked)
            fcisArr.push(fcis[i].value);
    }

    return {
        startDate: moment(startDateControl.value).toDate(),
        endDateControl: moment(endDateControl.value).toDate(),
        group: group.value,
        fcis: fcisArr,
    };
};

const loadData = (params) => {
    services.getFciData(params.startDate, params.endDate, params.group, params.fci)
        .then(result => {
            result.sort((a, b) => {
                return a.date - b.date;
            });

            window.lastResults = result;

            chartjs.loadChart(result, params.fcis);
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

const loadCheckBoxes = (container, obj) => {
    container.innerHTML = '';
    let i = 1;

    for (var key in obj) {
        const checkbox = document.createElement('input');
        const label = document.createElement('label');

        if (1 == i++)
            checkbox.checked = true;

        label.innerText = obj[key];
        checkbox.name = 'fci';
        checkbox.type = 'checkbox';
        checkbox.value = key;

        container.appendChild(checkbox);
        container.appendChild(label);

        checkbox.addEventListener('change', (element) => {
            const target = element.target;
            if (target.checked) {
                const data = window.lastResults;
                const fci = target.value;
                const results = data.filter(e => e.fci == fci);

                chartjs.addDataset(results);
            }
            else {
                const fci = target.value;
                chartjs.removeDataset(fci);
            }
        });
    }
};

const loadForm = () => {
    const groups = document.querySelector('#groups');
    const fcisDropDown = document.querySelector('#fcis');
    const startDateControl = document.querySelector('#startDate');
    const endDateControl = document.querySelector('#endDate');
    const checkboxesContainer = document.querySelector('#fcis-container');

    startDateControl.value = moment().add(-10, 'days').format('YYYY-MM-DD');
    endDateControl.value = moment().format('YYYY-MM-DD');

    loadDropdown(groups, metadata.groups);

    groups.addEventListener('change', (event) => {
        loadDropdown(fcisDropDown, metadata.fcis[event.target.value]);
        loadCheckBoxes(checkboxesContainer, metadata.fcis[event.target.value]);

        const params = getParams();
        params.group = event.target.value;
        loadData(params);
    });

    const selectedGroup = groups.value;

    loadCheckBoxes(checkboxesContainer, metadata.fcis[selectedGroup]);

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
