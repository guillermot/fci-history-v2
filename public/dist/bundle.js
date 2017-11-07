/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const services = __webpack_require__(1);
const dailyVariation = __webpack_require__(2);
const loadChartjs = __webpack_require__(3);

const container = document.querySelector('#daily-variation > tbody');
services.getFciData()
    .then(result => {
        dailyVariation.loadData(container, result);
        loadChartjs.loadChart(result);
    }).catch(err => {
        console.log(err);
    });

// console.log(dailyVariation);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

const baseUrl = 'https://q9cdz9r88k.execute-api.us-east-1.amazonaws.com/dev';
const getFciData = () => {
    const url = baseUrl + '/fci?start_date=20171018&end_date=20171020&group=fr&fci=FBA RDoPlA';
    // return new Promise(function(success, error){
    //     success([{"daily-variation":"0.01","date":"20171020","currency":"U$S","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"0.33","fci":"FBA RenDoA","group":"fr","price":"1035,748","description":"FBA RENTA FIJA DOLAR A","id":"4a232f31-6891-00e9-bb18-01e65aa67cd9"},{"daily-variation":"-1.34","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"12.69","fci":"FBA CalifA","group":"fr","price":"38493,902","description":"FBA  CALIFICADO","id":"2abc4cc9-deec-7f2c-9fec-54ae045d0fa9"},{"daily-variation":"0.1","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"1.99","fci":"FBA AhorPA","group":"fr","price":"10307,022","description":"FBA AHORRO PESOS","id":"b642cddc-1d50-d9cb-7986-c24650c456aa"},{"daily-variation":"0.31","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"3.99","fci":"FBA RMixtA","group":"fr","price":"1276,633","description":"FBA RENTA MIXTA","id":"79e2f6c5-a6d7-0efe-11c9-b1bf9fe0a17b"},{"daily-variation":"-0.28","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"4.0","fci":"FBA RMixtA","group":"fr","price":"1272,667","description":"FBA RENTA MIXTA","id":"ba2e035a-bba0-6e80-33b5-07a5e57bbf5e"},{"daily-variation":"0.03","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"3.04","fci":"FBA HORIZ","group":"fr","price":"18173,725","description":"FBA HORIZONTE","id":"775547a4-0237-c85a-b51c-eadea19f7d38"},{"daily-variation":"0.05","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"1.69","fci":"FBA RenPeA","group":"fr","price":"5977,559","description":"FBA RENTA PESOS","id":"28061afe-2e18-847c-194e-2cbec53ca002"},{"daily-variation":"-0.78","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"2.74","fci":"FBA AccLA","group":"fr","price":"11946,574","description":"FBA ACCIONES LATINOAMERICANAS","id":"df7b4a02-383f-ba11-844e-10b317da49d0"},{"daily-variation":"0.05","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"2.01","fci":"FBA BonAA","group":"fr","price":"6538,069","description":"FBA BONOS ARGENTINA","id":"c8776fb7-f74d-3b20-bb75-65de754aba8d"},{"daily-variation":"-0.18","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"3.45","fci":"FBA HoPluA","group":"fr","price":"1148,195","description":"FBA HORIZONTE PLUS A","id":"affa797c-49dc-60e2-f615-973cef9910fa"},{"daily-variation":"0.0","date":"20171018","currency":"U$S","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"0.32","fci":"FBA RenDoA","group":"fr","price":"1035,644","description":"FBA RENTA FIJA DOLAR A","id":"68044c8a-dc87-7622-800b-7de743d7b85a"},{"daily-variation":"-0.12","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"2.33","fci":"FBA HORIZ","group":"fr","price":"18151,385","description":"FBA HORIZONTE","id":"290936ac-f2af-7c2f-32a9-02f1d33514d8"},{"daily-variation":"-0.51","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"3.91","fci":"FBA AccLA","group":"fr","price":"12040,171","description":"FBA ACCIONES LATINOAMERICANAS","id":"c869c537-ff2e-62e8-6a42-0a3f587a11fe"},{"daily-variation":"0.72","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"3.23","fci":"FBA AccLA","group":"fr","price":"12032,449","description":"FBA ACCIONES LATINOAMERICANAS","id":"50eafbbd-1285-0a76-13ff-ae6687ac537b"},{"daily-variation":"0.02","date":"20171018","currency":"U$S","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"0.56","fci":"FBA RDoPlA","group":"fr","price":"1035,747","description":"FBA RENTA FIJA DOLAR PLUS A","id":"e23ace1b-5d96-be1e-d77d-38df9a810a36"},{"daily-variation":"0.04","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"1.99","fci":"FBA AhorPA","group":"fr","price":"10297,096","description":"FBA AHORRO PESOS","id":"87949ca0-d72f-80cb-b7b0-ee905cc11895"},{"daily-variation":"1.94","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"11.92","fci":"FBA AccArA","group":"fr","price":"9028,764","description":"FBA ACCIONES ARGENTINA","id":"3f72bded-f74c-29ab-ba83-ff5a10db93ae"},{"daily-variation":"0.0","date":"20171019","currency":"U$S","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"0.3","fci":"FBA RenDoA","group":"fr","price":"1035,631","description":"FBA RENTA FIJA DOLAR A","id":"017494a4-bd6b-954e-dbef-f4d41a2d1fdb"},{"daily-variation":"0.57","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"2.44","fci":"FBA HORIZ","group":"fr","price":"18254,938","description":"FBA HORIZONTE","id":"920a7dbe-8e1c-b2f1-9f03-3c85e991ac5c"},{"daily-variation":"0.05","date":"20171019","currency":"U$S","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"0.58","fci":"FBA RDoPlA","group":"fr","price":"1036,220","description":"FBA RENTA FIJA DOLAR PLUS A","id":"280ee0da-b8d1-7b66-4a6b-fbe52bee8242"},{"daily-variation":"-0.03","date":"20171020","currency":"U$S","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"0.58","fci":"FBA RDoPlA","group":"fr","price":"1035,945","description":"FBA RENTA FIJA DOLAR PLUS A","id":"2d07bf2e-6345-8b9c-6cd2-f40fb7457706"},{"daily-variation":"-1.25","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"14.07","fci":"FBA AccArA","group":"fr","price":"8983,469","description":"FBA ACCIONES ARGENTINA","id":"08ffa616-c882-93e5-1277-7a0cb3c973de"},{"daily-variation":"-1.5","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"10.05","fci":"FBA CalifA","group":"fr","price":"37916,220","description":"FBA  CALIFICADO","id":"7ac95966-7342-9d6e-f0ea-7376f8779b40"},{"daily-variation":"-1.41","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"11.38","fci":"FBA AccArA","group":"fr","price":"8857,215","description":"FBA ACCIONES ARGENTINA","id":"a0f315fe-a631-6fb2-58b1-6104e21fa62e"},{"daily-variation":"0.05","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"1.8","fci":"FBA RenPeA","group":"fr","price":"5974,320","description":"FBA RENTA PESOS","id":"df2e2297-4386-a27a-935a-6ac348ca7d0d"},{"daily-variation":"0.07","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"0.0","fci":"FBA RFPluA","group":"fr","price":"1020,149","description":"FBA RENTA FIJA PLUS","id":"4c670daf-4475-6329-2c3d-330cf1cbe3d7"},{"daily-variation":"0.07","date":"20171019","currency":"$","createdDate":"2017-10-19T09:00:03+00:00","monthly-variation":"0.0","fci":"FBA RFPluA","group":"fr","price":"1020,851","description":"FBA RENTA FIJA PLUS","id":"14341f83-35c0-97a5-f76f-536876172a19"},{"daily-variation":"0.08","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"4.21","fci":"FBA HoPluA","group":"fr","price":"1150,302","description":"FBA HORIZONTE PLUS A","id":"01951d06-4986-c39d-292e-24e3a3bf06e1"},{"daily-variation":"1.89","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"10.44","fci":"FBA CalifA","group":"fr","price":"38632,203","description":"FBA  CALIFICADO","id":"3f462dd2-2547-8fc6-1805-fd68e94ae8ea"},{"daily-variation":"0.08","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"2.03","fci":"FBA BonAA","group":"fr","price":"6534,912","description":"FBA BONOS ARGENTINA","id":"0bfd3ae1-a19d-8b90-108d-fe1ca0ab3431"},{"daily-variation":"-0.27","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"4.61","fci":"FBA RMixtA","group":"fr","price":"1276,222","description":"FBA RENTA MIXTA","id":"d879c2ca-d037-329f-13cd-d3143fd40562"},{"daily-variation":"0.05","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"1.69","fci":"FBA RenPeA","group":"fr","price":"5980,789","description":"FBA RENTA PESOS","id":"1f71bfc5-abe4-6873-d2aa-b41f16511241"},{"daily-variation":"0.09","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"0.0","fci":"FBA RFPluA","group":"fr","price":"1021,809","description":"FBA RENTA FIJA PLUS","id":"55ac4ecd-ac15-8893-5f8e-55187adebb60"},{"daily-variation":"0.1","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"2.01","fci":"FBA BonAA","group":"fr","price":"6544,348","description":"FBA BONOS ARGENTINA","id":"8c0732b5-a6a6-e452-ae58-92ec1757ff43"},{"daily-variation":"0.5","date":"20171020","currency":"$","createdDate":"2017-10-20T09:00:02+00:00","monthly-variation":"3.45","fci":"FBA HoPluA","group":"fr","price":"1153,891","description":"FBA HORIZONTE PLUS A","id":"5bb7d2f0-c7f4-a711-831e-0d8ce3dfc2fe"},{"daily-variation":"0.07","date":"20171018","currency":"$","createdDate":"2017-10-18T09:00:04+00:00","monthly-variation":"2.0","fci":"FBA AhorPA","group":"fr","price":"10292,519","description":"FBA AHORRO PESOS","id":"67f98f4a-d990-ecab-fdfc-7e2c754eb87f"}]);
    // });
    return fetch(url)
        .then(response => response.json());
};

module.exports.getFciData = getFciData;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const templateId = '#daily-variation-tr';
const templateContent = document.querySelector(templateId).content;

const loadData = (container, data) => {
    for (var i = 0; i < data.length; i++) {
        const item = data[i];
        
        const newTr = document.importNode(templateContent, true);
        const tds = newTr.querySelectorAll('td');

        tds[0].innerText = item.description;
        tds[1].innerText = item['daily-variation'];
        tds[2].innerText = item.date;

        container.append(newTr);
    }
};

module.exports.loadData = loadData;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};


const loadChart = function (results) {
    const labels = [];
    const values = [];

    for (var i = 0; i < results.length; i++) {
        var item = results[i];
        
        labels.push(item.date);
        values.push(item['daily-variation']);
    }
    
    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "My First dataset",
                backgroundColor: chartColors.red,
                borderColor: chartColors.red,
                data: values,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    };

    window.onload = function() {
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myLine = new Chart(ctx, config);
    };
};

module.exports.loadChart = loadChart;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzFiZDVkNWNiNzM0MmJjNmU1ZGUiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9jb21wb25lbnRzL2RhaWx5LXZhcmlhdGlvbi10ci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvY29tcG9uZW50cy9jaGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVRQUF1USxFQUFFLGlRQUFpUSxFQUFFLCtQQUErUCxFQUFFLDhQQUE4UCxFQUFFLDhQQUE4UCxFQUFFLDRQQUE0UCxFQUFFLDhQQUE4UCxFQUFFLDZRQUE2USxFQUFFLGlRQUFpUSxFQUFFLG9RQUFvUSxFQUFFLHNRQUFzUSxFQUFFLDZQQUE2UCxFQUFFLDZRQUE2USxFQUFFLDRRQUE0USxFQUFFLDRRQUE0USxFQUFFLGdRQUFnUSxFQUFFLHNRQUFzUSxFQUFFLHFRQUFxUSxFQUFFLDRQQUE0UCxFQUFFLDRRQUE0USxFQUFFLDZRQUE2USxFQUFFLHVRQUF1USxFQUFFLGdRQUFnUSxFQUFFLHVRQUF1USxFQUFFLDZQQUE2UCxFQUFFLGlRQUFpUSxFQUFFLGlRQUFpUSxFQUFFLG1RQUFtUSxFQUFFLGdRQUFnUSxFQUFFLGlRQUFpUSxFQUFFLCtQQUErUCxFQUFFLDhQQUE4UCxFQUFFLGlRQUFpUSxFQUFFLGdRQUFnUSxFQUFFLGtRQUFrUSxFQUFFLCtQQUErUDtBQUNsc1MsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMWJkNWQ1Y2I3MzQyYmM2ZTVkZSIsImNvbnN0IHNlcnZpY2VzID0gcmVxdWlyZSgnLi9hcHAvc2VydmljZXMuanMnKTtcclxuY29uc3QgZGFpbHlWYXJpYXRpb24gPSByZXF1aXJlKCcuL2FwcC9jb21wb25lbnRzL2RhaWx5LXZhcmlhdGlvbi10ci5qcycpO1xyXG5jb25zdCBsb2FkQ2hhcnRqcyA9IHJlcXVpcmUoJy4vYXBwL2NvbXBvbmVudHMvY2hhcnQuanMnKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseS12YXJpYXRpb24gPiB0Ym9keScpO1xyXG5zZXJ2aWNlcy5nZXRGY2lEYXRhKClcclxuICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgZGFpbHlWYXJpYXRpb24ubG9hZERhdGEoY29udGFpbmVyLCByZXN1bHQpO1xyXG4gICAgICAgIGxvYWRDaGFydGpzLmxvYWRDaGFydChyZXN1bHQpO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhkYWlseVZhcmlhdGlvbik7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9xOWNkejlyODhrLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldic7XHJcbmNvbnN0IGdldEZjaURhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBiYXNlVXJsICsgJy9mY2k/c3RhcnRfZGF0ZT0yMDE3MTAxOCZlbmRfZGF0ZT0yMDE3MTAyMCZncm91cD1mciZmY2k9RkJBIFJEb1BsQSc7XHJcbiAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oc3VjY2VzcywgZXJyb3Ipe1xyXG4gICAgLy8gICAgIHN1Y2Nlc3MoW3tcImRhaWx5LXZhcmlhdGlvblwiOlwiMC4wMVwiLFwiZGF0ZVwiOlwiMjAxNzEwMjBcIixcImN1cnJlbmN5XCI6XCJVJFNcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTIwVDA5OjAwOjAyKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMC4zM1wiLFwiZmNpXCI6XCJGQkEgUmVuRG9BXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCIxMDM1LDc0OFwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBSRU5UQSBGSUpBIERPTEFSIEFcIixcImlkXCI6XCI0YTIzMmYzMS02ODkxLTAwZTktYmIxOC0wMWU2NWFhNjdjZDlcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCItMS4zNFwiLFwiZGF0ZVwiOlwiMjAxNzEwMThcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0xOFQwOTowMDowNCswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjEyLjY5XCIsXCJmY2lcIjpcIkZCQSBDYWxpZkFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjM4NDkzLDkwMlwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSAgQ0FMSUZJQ0FET1wiLFwiaWRcIjpcIjJhYmM0Y2M5LWRlZWMtN2YyYy05ZmVjLTU0YWUwNDVkMGZhOVwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIjAuMVwiLFwiZGF0ZVwiOlwiMjAxNzEwMjBcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0yMFQwOTowMDowMiswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjEuOTlcIixcImZjaVwiOlwiRkJBIEFob3JQQVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTAzMDcsMDIyXCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIEFIT1JSTyBQRVNPU1wiLFwiaWRcIjpcImI2NDJjZGRjLTFkNTAtZDljYi03OTg2LWMyNDY1MGM0NTZhYVwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIjAuMzFcIixcImRhdGVcIjpcIjIwMTcxMDIwXCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMjBUMDk6MDA6MDIrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIzLjk5XCIsXCJmY2lcIjpcIkZCQSBSTWl4dEFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjEyNzYsNjMzXCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIFJFTlRBIE1JWFRBXCIsXCJpZFwiOlwiNzllMmY2YzUtYTZkNy0wZWZlLTExYzktYjFiZjlmZTBhMTdiXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiLTAuMjhcIixcImRhdGVcIjpcIjIwMTcxMDE5XCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMTlUMDk6MDA6MDMrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCI0LjBcIixcImZjaVwiOlwiRkJBIFJNaXh0QVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTI3Miw2NjdcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgUkVOVEEgTUlYVEFcIixcImlkXCI6XCJiYTJlMDM1YS1iYmEwLTZlODAtMzNiNS0wN2E1ZTU3YmJmNWVcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCIwLjAzXCIsXCJkYXRlXCI6XCIyMDE3MTAxOFwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE4VDA5OjAwOjA0KzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMy4wNFwiLFwiZmNpXCI6XCJGQkEgSE9SSVpcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjE4MTczLDcyNVwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBIT1JJWk9OVEVcIixcImlkXCI6XCI3NzU1NDdhNC0wMjM3LWM4NWEtYjUxYy1lYWRlYTE5ZjdkMzhcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCIwLjA1XCIsXCJkYXRlXCI6XCIyMDE3MTAxOVwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE5VDA5OjAwOjAzKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMS42OVwiLFwiZmNpXCI6XCJGQkEgUmVuUGVBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCI1OTc3LDU1OVwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBSRU5UQSBQRVNPU1wiLFwiaWRcIjpcIjI4MDYxYWZlLTJlMTgtODQ3Yy0xOTRlLTJjYmVjNTNjYTAwMlwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIi0wLjc4XCIsXCJkYXRlXCI6XCIyMDE3MTAxOVwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE5VDA5OjAwOjAzKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMi43NFwiLFwiZmNpXCI6XCJGQkEgQWNjTEFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjExOTQ2LDU3NFwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBBQ0NJT05FUyBMQVRJTk9BTUVSSUNBTkFTXCIsXCJpZFwiOlwiZGY3YjRhMDItMzgzZi1iYTExLTg0NGUtMTBiMzE3ZGE0OWQwXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiMC4wNVwiLFwiZGF0ZVwiOlwiMjAxNzEwMTlcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0xOVQwOTowMDowMyswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjIuMDFcIixcImZjaVwiOlwiRkJBIEJvbkFBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCI2NTM4LDA2OVwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBCT05PUyBBUkdFTlRJTkFcIixcImlkXCI6XCJjODc3NmZiNy1mNzRkLTNiMjAtYmI3NS02NWRlNzU0YWJhOGRcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCItMC4xOFwiLFwiZGF0ZVwiOlwiMjAxNzEwMTlcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0xOVQwOTowMDowMyswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjMuNDVcIixcImZjaVwiOlwiRkJBIEhvUGx1QVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTE0OCwxOTVcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgSE9SSVpPTlRFIFBMVVMgQVwiLFwiaWRcIjpcImFmZmE3OTdjLTQ5ZGMtNjBlMi1mNjE1LTk3M2NlZjk5MTBmYVwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIjAuMFwiLFwiZGF0ZVwiOlwiMjAxNzEwMThcIixcImN1cnJlbmN5XCI6XCJVJFNcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE4VDA5OjAwOjA0KzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMC4zMlwiLFwiZmNpXCI6XCJGQkEgUmVuRG9BXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCIxMDM1LDY0NFwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBSRU5UQSBGSUpBIERPTEFSIEFcIixcImlkXCI6XCI2ODA0NGM4YS1kYzg3LTc2MjItODAwYi03ZGU3NDNkN2I4NWFcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCItMC4xMlwiLFwiZGF0ZVwiOlwiMjAxNzEwMTlcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0xOVQwOTowMDowMyswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjIuMzNcIixcImZjaVwiOlwiRkJBIEhPUklaXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCIxODE1MSwzODVcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgSE9SSVpPTlRFXCIsXCJpZFwiOlwiMjkwOTM2YWMtZjJhZi03YzJmLTMyYTktMDJmMWQzMzUxNGQ4XCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiLTAuNTFcIixcImRhdGVcIjpcIjIwMTcxMDE4XCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMThUMDk6MDA6MDQrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIzLjkxXCIsXCJmY2lcIjpcIkZCQSBBY2NMQVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTIwNDAsMTcxXCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIEFDQ0lPTkVTIExBVElOT0FNRVJJQ0FOQVNcIixcImlkXCI6XCJjODY5YzUzNy1mZjJlLTYyZTgtNmE0Mi0wYTNmNTg3YTExZmVcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCIwLjcyXCIsXCJkYXRlXCI6XCIyMDE3MTAyMFwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTIwVDA5OjAwOjAyKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMy4yM1wiLFwiZmNpXCI6XCJGQkEgQWNjTEFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjEyMDMyLDQ0OVwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBBQ0NJT05FUyBMQVRJTk9BTUVSSUNBTkFTXCIsXCJpZFwiOlwiNTBlYWZiYmQtMTI4NS0wYTc2LTEzZmYtYWU2Njg3YWM1MzdiXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiMC4wMlwiLFwiZGF0ZVwiOlwiMjAxNzEwMThcIixcImN1cnJlbmN5XCI6XCJVJFNcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE4VDA5OjAwOjA0KzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMC41NlwiLFwiZmNpXCI6XCJGQkEgUkRvUGxBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCIxMDM1LDc0N1wiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBSRU5UQSBGSUpBIERPTEFSIFBMVVMgQVwiLFwiaWRcIjpcImUyM2FjZTFiLTVkOTYtYmUxZS1kNzdkLTM4ZGY5YTgxMGEzNlwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIjAuMDRcIixcImRhdGVcIjpcIjIwMTcxMDE5XCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMTlUMDk6MDA6MDMrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIxLjk5XCIsXCJmY2lcIjpcIkZCQSBBaG9yUEFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjEwMjk3LDA5NlwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBBSE9SUk8gUEVTT1NcIixcImlkXCI6XCI4Nzk0OWNhMC1kNzJmLTgwY2ItYjdiMC1lZTkwNWNjMTE4OTVcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCIxLjk0XCIsXCJkYXRlXCI6XCIyMDE3MTAyMFwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTIwVDA5OjAwOjAyKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMTEuOTJcIixcImZjaVwiOlwiRkJBIEFjY0FyQVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiOTAyOCw3NjRcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgQUNDSU9ORVMgQVJHRU5USU5BXCIsXCJpZFwiOlwiM2Y3MmJkZWQtZjc0Yy0yOWFiLWJhODMtZmY1YTEwZGI5M2FlXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiMC4wXCIsXCJkYXRlXCI6XCIyMDE3MTAxOVwiLFwiY3VycmVuY3lcIjpcIlUkU1wiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMTlUMDk6MDA6MDMrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIwLjNcIixcImZjaVwiOlwiRkJBIFJlbkRvQVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTAzNSw2MzFcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgUkVOVEEgRklKQSBET0xBUiBBXCIsXCJpZFwiOlwiMDE3NDk0YTQtYmQ2Yi05NTRlLWRiZWYtZjRkNDFhMmQxZmRiXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiMC41N1wiLFwiZGF0ZVwiOlwiMjAxNzEwMjBcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0yMFQwOTowMDowMiswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjIuNDRcIixcImZjaVwiOlwiRkJBIEhPUklaXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCIxODI1NCw5MzhcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgSE9SSVpPTlRFXCIsXCJpZFwiOlwiOTIwYTdkYmUtOGUxYy1iMmYxLTlmMDMtM2M4NWU5OTFhYzVjXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiMC4wNVwiLFwiZGF0ZVwiOlwiMjAxNzEwMTlcIixcImN1cnJlbmN5XCI6XCJVJFNcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE5VDA5OjAwOjAzKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMC41OFwiLFwiZmNpXCI6XCJGQkEgUkRvUGxBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCIxMDM2LDIyMFwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBSRU5UQSBGSUpBIERPTEFSIFBMVVMgQVwiLFwiaWRcIjpcIjI4MGVlMGRhLWI4ZDEtN2I2Ni00YTZiLWZiZTUyYmVlODI0MlwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIi0wLjAzXCIsXCJkYXRlXCI6XCIyMDE3MTAyMFwiLFwiY3VycmVuY3lcIjpcIlUkU1wiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMjBUMDk6MDA6MDIrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIwLjU4XCIsXCJmY2lcIjpcIkZCQSBSRG9QbEFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjEwMzUsOTQ1XCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIFJFTlRBIEZJSkEgRE9MQVIgUExVUyBBXCIsXCJpZFwiOlwiMmQwN2JmMmUtNjM0NS04YjljLTZjZDItZjQwZmI3NDU3NzA2XCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiLTEuMjVcIixcImRhdGVcIjpcIjIwMTcxMDE4XCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMThUMDk6MDA6MDQrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIxNC4wN1wiLFwiZmNpXCI6XCJGQkEgQWNjQXJBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCI4OTgzLDQ2OVwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBBQ0NJT05FUyBBUkdFTlRJTkFcIixcImlkXCI6XCIwOGZmYTYxNi1jODgyLTkzZTUtMTI3Ny03YTBjYjNjOTczZGVcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCItMS41XCIsXCJkYXRlXCI6XCIyMDE3MTAxOVwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE5VDA5OjAwOjAzKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMTAuMDVcIixcImZjaVwiOlwiRkJBIENhbGlmQVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMzc5MTYsMjIwXCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBICBDQUxJRklDQURPXCIsXCJpZFwiOlwiN2FjOTU5NjYtNzM0Mi05ZDZlLWYwZWEtNzM3NmY4Nzc5YjQwXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiLTEuNDFcIixcImRhdGVcIjpcIjIwMTcxMDE5XCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMTlUMDk6MDA6MDMrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIxMS4zOFwiLFwiZmNpXCI6XCJGQkEgQWNjQXJBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCI4ODU3LDIxNVwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBBQ0NJT05FUyBBUkdFTlRJTkFcIixcImlkXCI6XCJhMGYzMTVmZS1hNjMxLTZmYjItNThiMS02MTA0ZTIxZmE2MmVcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCIwLjA1XCIsXCJkYXRlXCI6XCIyMDE3MTAxOFwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE4VDA5OjAwOjA0KzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMS44XCIsXCJmY2lcIjpcIkZCQSBSZW5QZUFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjU5NzQsMzIwXCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIFJFTlRBIFBFU09TXCIsXCJpZFwiOlwiZGYyZTIyOTctNDM4Ni1hMjdhLTkzNWEtNmFjMzQ4Y2E3ZDBkXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiMC4wN1wiLFwiZGF0ZVwiOlwiMjAxNzEwMThcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0xOFQwOTowMDowNCswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjAuMFwiLFwiZmNpXCI6XCJGQkEgUkZQbHVBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCIxMDIwLDE0OVwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBSRU5UQSBGSUpBIFBMVVNcIixcImlkXCI6XCI0YzY3MGRhZi00NDc1LTYzMjktMmMzZC0zMzBjZjFjYmUzZDdcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCIwLjA3XCIsXCJkYXRlXCI6XCIyMDE3MTAxOVwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTE5VDA5OjAwOjAzKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMC4wXCIsXCJmY2lcIjpcIkZCQSBSRlBsdUFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjEwMjAsODUxXCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIFJFTlRBIEZJSkEgUExVU1wiLFwiaWRcIjpcIjE0MzQxZjgzLTM1YzAtOTdhNS1mNzZmLTUzNjg3NjE3MmExOVwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIjAuMDhcIixcImRhdGVcIjpcIjIwMTcxMDE4XCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMThUMDk6MDA6MDQrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCI0LjIxXCIsXCJmY2lcIjpcIkZCQSBIb1BsdUFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjExNTAsMzAyXCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIEhPUklaT05URSBQTFVTIEFcIixcImlkXCI6XCIwMTk1MWQwNi00OTg2LWMzOWQtMjkyZS0yNGUzYTNiZjA2ZTFcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCIxLjg5XCIsXCJkYXRlXCI6XCIyMDE3MTAyMFwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTIwVDA5OjAwOjAyKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMTAuNDRcIixcImZjaVwiOlwiRkJBIENhbGlmQVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMzg2MzIsMjAzXCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBICBDQUxJRklDQURPXCIsXCJpZFwiOlwiM2Y0NjJkZDItMjU0Ny04ZmM2LTE4MDUtZmQ2OGU5NGFlOGVhXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiMC4wOFwiLFwiZGF0ZVwiOlwiMjAxNzEwMThcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0xOFQwOTowMDowNCswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjIuMDNcIixcImZjaVwiOlwiRkJBIEJvbkFBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCI2NTM0LDkxMlwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBCT05PUyBBUkdFTlRJTkFcIixcImlkXCI6XCIwYmZkM2FlMS1hMTlkLThiOTAtMTA4ZC1mZTFjYTBhYjM0MzFcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCItMC4yN1wiLFwiZGF0ZVwiOlwiMjAxNzEwMThcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0xOFQwOTowMDowNCswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjQuNjFcIixcImZjaVwiOlwiRkJBIFJNaXh0QVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTI3NiwyMjJcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgUkVOVEEgTUlYVEFcIixcImlkXCI6XCJkODc5YzJjYS1kMDM3LTMyOWYtMTNjZC1kMzE0M2ZkNDA1NjJcIn0se1wiZGFpbHktdmFyaWF0aW9uXCI6XCIwLjA1XCIsXCJkYXRlXCI6XCIyMDE3MTAyMFwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTIwVDA5OjAwOjAyKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMS42OVwiLFwiZmNpXCI6XCJGQkEgUmVuUGVBXCIsXCJncm91cFwiOlwiZnJcIixcInByaWNlXCI6XCI1OTgwLDc4OVwiLFwiZGVzY3JpcHRpb25cIjpcIkZCQSBSRU5UQSBQRVNPU1wiLFwiaWRcIjpcIjFmNzFiZmM1LWFiZTQtNjg3My1kMmFhLWI0MWYxNjUxMTI0MVwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIjAuMDlcIixcImRhdGVcIjpcIjIwMTcxMDIwXCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMjBUMDk6MDA6MDIrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIwLjBcIixcImZjaVwiOlwiRkJBIFJGUGx1QVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTAyMSw4MDlcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgUkVOVEEgRklKQSBQTFVTXCIsXCJpZFwiOlwiNTVhYzRlY2QtYWMxNS04ODkzLTVmOGUtNTUxODdhZGViYjYwXCJ9LHtcImRhaWx5LXZhcmlhdGlvblwiOlwiMC4xXCIsXCJkYXRlXCI6XCIyMDE3MTAyMFwiLFwiY3VycmVuY3lcIjpcIiRcIixcImNyZWF0ZWREYXRlXCI6XCIyMDE3LTEwLTIwVDA5OjAwOjAyKzAwOjAwXCIsXCJtb250aGx5LXZhcmlhdGlvblwiOlwiMi4wMVwiLFwiZmNpXCI6XCJGQkEgQm9uQUFcIixcImdyb3VwXCI6XCJmclwiLFwicHJpY2VcIjpcIjY1NDQsMzQ4XCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIEJPTk9TIEFSR0VOVElOQVwiLFwiaWRcIjpcIjhjMDczMmI1LWE2YTYtZTQ1Mi1hZTU4LTkyZWMxNzU3ZmY0M1wifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIjAuNVwiLFwiZGF0ZVwiOlwiMjAxNzEwMjBcIixcImN1cnJlbmN5XCI6XCIkXCIsXCJjcmVhdGVkRGF0ZVwiOlwiMjAxNy0xMC0yMFQwOTowMDowMiswMDowMFwiLFwibW9udGhseS12YXJpYXRpb25cIjpcIjMuNDVcIixcImZjaVwiOlwiRkJBIEhvUGx1QVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTE1Myw4OTFcIixcImRlc2NyaXB0aW9uXCI6XCJGQkEgSE9SSVpPTlRFIFBMVVMgQVwiLFwiaWRcIjpcIjViYjdkMmYwLWM3ZjQtYTcxMS04MzFlLTBkOGNlM2RmYzJmZVwifSx7XCJkYWlseS12YXJpYXRpb25cIjpcIjAuMDdcIixcImRhdGVcIjpcIjIwMTcxMDE4XCIsXCJjdXJyZW5jeVwiOlwiJFwiLFwiY3JlYXRlZERhdGVcIjpcIjIwMTctMTAtMThUMDk6MDA6MDQrMDA6MDBcIixcIm1vbnRobHktdmFyaWF0aW9uXCI6XCIyLjBcIixcImZjaVwiOlwiRkJBIEFob3JQQVwiLFwiZ3JvdXBcIjpcImZyXCIsXCJwcmljZVwiOlwiMTAyOTIsNTE5XCIsXCJkZXNjcmlwdGlvblwiOlwiRkJBIEFIT1JSTyBQRVNPU1wiLFwiaWRcIjpcIjY3Zjk4ZjRhLWQ5OTAtZWNhYi1mZGZjLTdlMmM3NTRlYjg3ZlwifV0pO1xyXG4gICAgLy8gfSk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5nZXRGY2lEYXRhID0gZ2V0RmNpRGF0YTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAvc2VydmljZXMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgdGVtcGxhdGVJZCA9ICcjZGFpbHktdmFyaWF0aW9uLXRyJztcclxuY29uc3QgdGVtcGxhdGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0ZW1wbGF0ZUlkKS5jb250ZW50O1xyXG5cclxuY29uc3QgbG9hZERhdGEgPSAoY29udGFpbmVyLCBkYXRhKSA9PiB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gZGF0YVtpXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdUciA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVDb250ZW50LCB0cnVlKTtcclxuICAgICAgICBjb25zdCB0ZHMgPSBuZXdUci5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xyXG5cclxuICAgICAgICB0ZHNbMF0uaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0ZHNbMV0uaW5uZXJUZXh0ID0gaXRlbVsnZGFpbHktdmFyaWF0aW9uJ107XHJcbiAgICAgICAgdGRzWzJdLmlubmVyVGV4dCA9IGl0ZW0uZGF0ZTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChuZXdUcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5sb2FkRGF0YSA9IGxvYWREYXRhO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwL2NvbXBvbmVudHMvZGFpbHktdmFyaWF0aW9uLXRyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGNoYXJ0Q29sb3JzID0ge1xyXG5cdHJlZDogJ3JnYigyNTUsIDk5LCAxMzIpJyxcclxuXHRvcmFuZ2U6ICdyZ2IoMjU1LCAxNTksIDY0KScsXHJcblx0eWVsbG93OiAncmdiKDI1NSwgMjA1LCA4NiknLFxyXG5cdGdyZWVuOiAncmdiKDc1LCAxOTIsIDE5MiknLFxyXG5cdGJsdWU6ICdyZ2IoNTQsIDE2MiwgMjM1KScsXHJcblx0cHVycGxlOiAncmdiKDE1MywgMTAyLCAyNTUpJyxcclxuXHRncmV5OiAncmdiKDIwMSwgMjAzLCAyMDcpJ1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGxvYWRDaGFydCA9IGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBpdGVtID0gcmVzdWx0c1tpXTtcclxuICAgICAgICBcclxuICAgICAgICBsYWJlbHMucHVzaChpdGVtLmRhdGUpO1xyXG4gICAgICAgIHZhbHVlcy5wdXNoKGl0ZW1bJ2RhaWx5LXZhcmlhdGlvbiddKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJNeSBGaXJzdCBkYXRhc2V0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0Q29sb3JzLnJlZCxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjaGFydENvbG9ycy5yZWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ2hhcnQuanMgTGluZSBDaGFydCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdpbmRleCcsXHJcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgbW9kZTogJ25lYXJlc3QnLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnTW9udGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdWYWx1ZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB3aW5kb3cubXlMaW5lID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5sb2FkQ2hhcnQgPSBsb2FkQ2hhcnQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwL2NvbXBvbmVudHMvY2hhcnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==