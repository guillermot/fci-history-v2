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
        values.push(Number(item['daily-variation']));
    }

    debugger;

    if (!window.myLine) {
        var ctx = document.getElementById("canvas").getContext("2d");
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

        window.myLine = new Chart(ctx, config);
    } else {
        const currentData = window.myLine.config.data;

        currentData.labels.splice(0, currentData.labels.length)
        labels.forEach(l => currentData.labels.push(l));

        if (currentData.datasets.length > 0) {
            currentData.datasets['0'].data.splice(0, currentData.datasets['0'].data.length)
            values.forEach(val => currentData.datasets['0'].data.push(val));
        }

        window.myLine.update();
    }
};

module.exports.loadChart = loadChart;
