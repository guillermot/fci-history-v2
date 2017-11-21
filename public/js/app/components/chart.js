const chartColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
];

const loadChart = function (results, fcis) {

    const datasets = [];
    const referencesLabels = [];

    for (let i = 0; i < fcis.length; i++) {
        const values = [];
        let title = '';

        const fci = fcis[i];
        const fciResults = results.filter(e => e.fci == fci);

        for (let j = 0; j < fciResults.length; j++) {
            const item = fciResults[j];
            if (j == 0) {
                title = item.description;
            }
            
            values.push(Number(item['daily-variation']));

            const found = referencesLabels.find(e => e == item.date);
            if(!found)
                referencesLabels.push(item.date);
        }

        const dataset = {
            label: title,
            backgroundColor: chartColors[i],
            borderColor: chartColors[i],
            data: values,
            fill: false,
        };

        datasets.push(dataset);
    }

    if (!window.myLine) {
        var ctx = document.getElementById("canvas").getContext("2d");
        var config = {
            type: 'line',
            data: {
                labels: referencesLabels,
                datasets: datasets
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
