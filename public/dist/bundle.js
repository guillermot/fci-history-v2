(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const templateId = '#daily-variation-tr';
const templateContent = document.querySelector(templateId).content;

const loadData = (container, data) => {
    for (var i = 0; i < data.length; i++) {
        const item = data[i];
        
        const newTr = document.importNode(templateContent, true);
        const tds = newTr.querySelectorAll('td');

        tds[0].innerText = item.name;
        tds[1].innerText = item['daily-variation'];
        tds[2].innerText = item.date;

        container.append(newTr);
    }
};

module.exports.loadData = loadData;
},{}],2:[function(require,module,exports){
const baseUrl = '';
const getFciData = () =>{
    return [
        { name: 'fci-1', 'daily-variation': 2, date: '20171102'},
        { name: 'fci-2', 'daily-variation': 4, date: '20171103'},
        { name: 'fci-3', 'daily-variation': 5, date: '20171104'},
        { name: 'fci-4', 'daily-variation': 6, date: '20171101'}
    ];
};

module.exports.getFciData = getFciData;

},{}],3:[function(require,module,exports){
const services = require('./app/services.js');
const dailyVariation = require('./app/components/daily-variation-tr.js');

const container = document.querySelector('#daily-variation > tbody');
const data = services.getFciData();
dailyVariation.loadData(container, data);
// console.log(dailyVariation);


},{"./app/components/daily-variation-tr.js":1,"./app/services.js":2}]},{},[3]);
