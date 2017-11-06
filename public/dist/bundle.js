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
        //loadChartjs.loadChart(result);
    }).catch(err => {
        console.log(err);
    });

// console.log(dailyVariation);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

const baseUrl = 'https://q9cdz9r88k.execute-api.us-east-1.amazonaws.com/dev';
const getFciData = () => {
    const url = baseUrl + '/fci?start_date=20171018&end_date=20171020&group=fr';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTMxNjk2MmVjMzQwMmIwYzk5ZWMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC9jb21wb25lbnRzL2RhaWx5LXZhcmlhdGlvbi10ci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9hcHAvY29tcG9uZW50cy9jaGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMOzs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL2Rpc3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTMxNjk2MmVjMzQwMmIwYzk5ZWMiLCJjb25zdCBzZXJ2aWNlcyA9IHJlcXVpcmUoJy4vYXBwL3NlcnZpY2VzLmpzJyk7XHJcbmNvbnN0IGRhaWx5VmFyaWF0aW9uID0gcmVxdWlyZSgnLi9hcHAvY29tcG9uZW50cy9kYWlseS12YXJpYXRpb24tdHIuanMnKTtcclxuY29uc3QgbG9hZENoYXJ0anMgPSByZXF1aXJlKCcuL2FwcC9jb21wb25lbnRzL2NoYXJ0LmpzJyk7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFpbHktdmFyaWF0aW9uID4gdGJvZHknKTtcclxuc2VydmljZXMuZ2V0RmNpRGF0YSgpXHJcbiAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIGRhaWx5VmFyaWF0aW9uLmxvYWREYXRhKGNvbnRhaW5lciwgcmVzdWx0KTtcclxuICAgICAgICAvL2xvYWRDaGFydGpzLmxvYWRDaGFydChyZXN1bHQpO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhkYWlseVZhcmlhdGlvbik7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9xOWNkejlyODhrLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldic7XHJcbmNvbnN0IGdldEZjaURhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBiYXNlVXJsICsgJy9mY2k/c3RhcnRfZGF0ZT0yMDE3MTAxOCZlbmRfZGF0ZT0yMDE3MTAyMCZncm91cD1mcic7XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKHVybClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuZ2V0RmNpRGF0YSA9IGdldEZjaURhdGE7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwL3NlcnZpY2VzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHRlbXBsYXRlSWQgPSAnI2RhaWx5LXZhcmlhdGlvbi10cic7XHJcbmNvbnN0IHRlbXBsYXRlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGVtcGxhdGVJZCkuY29udGVudDtcclxuXHJcbmNvbnN0IGxvYWREYXRhID0gKGNvbnRhaW5lciwgZGF0YSkgPT4ge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRhdGFbaV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3VHIgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlQ29udGVudCwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdGRzID0gbmV3VHIucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcclxuXHJcbiAgICAgICAgdGRzWzBdLmlubmVyVGV4dCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGRzWzFdLmlubmVyVGV4dCA9IGl0ZW1bJ2RhaWx5LXZhcmlhdGlvbiddO1xyXG4gICAgICAgIHRkc1syXS5pbm5lclRleHQgPSBpdGVtLmRhdGU7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV3VHIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMubG9hZERhdGEgPSBsb2FkRGF0YTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC9jb21wb25lbnRzL2RhaWx5LXZhcmlhdGlvbi10ci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBjaGFydENvbG9ycyA9IHtcclxuXHRyZWQ6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXHJcblx0b3JhbmdlOiAncmdiKDI1NSwgMTU5LCA2NCknLFxyXG5cdHllbGxvdzogJ3JnYigyNTUsIDIwNSwgODYpJyxcclxuXHRncmVlbjogJ3JnYig3NSwgMTkyLCAxOTIpJyxcclxuXHRibHVlOiAncmdiKDU0LCAxNjIsIDIzNSknLFxyXG5cdHB1cnBsZTogJ3JnYigxNTMsIDEwMiwgMjU1KScsXHJcblx0Z3JleTogJ3JnYigyMDEsIDIwMywgMjA3KSdcclxufTtcclxuXHJcblxyXG5jb25zdCBsb2FkQ2hhcnQgPSBmdW5jdGlvbiAocmVzdWx0cykge1xyXG4gICAgY29uc3QgbGFiZWxzID0gW107XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHJlc3VsdHNbaV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGFiZWxzLnB1c2goaXRlbS5kYXRlKTtcclxuICAgICAgICB2YWx1ZXMucHVzaChpdGVtWydkYWlseS12YXJpYXRpb24nXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJNeSBGaXJzdCBkYXRhc2V0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0Q29sb3JzLnJlZCxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjaGFydENvbG9ycy5yZWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ2hhcnQuanMgTGluZSBDaGFydCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdpbmRleCcsXHJcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgbW9kZTogJ25lYXJlc3QnLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAnTW9udGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6ICdWYWx1ZSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB3aW5kb3cubXlMaW5lID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5sb2FkQ2hhcnQgPSBsb2FkQ2hhcnQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwL2NvbXBvbmVudHMvY2hhcnQuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==