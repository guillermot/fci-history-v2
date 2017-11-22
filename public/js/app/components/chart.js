const chartColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
];

const loadChart = (results, fcis) => {

    const datasets = [];
    const referencesLabels = [];

    for (let i = 0; i < fcis.length; i++) {
        const values = [];
        let title, fciKey;

        const fci = fcis[i];
        const fciResults = results.filter(e => e.fci == fci);

        if (fciResults.length == 0)
            continue;

        fciKey = fciResults[0].fci;
        title = fciResults[0].description;

        for (let j = 0; j < fciResults.length; j++) {
            const item = fciResults[j];

            values.push(Number(item['daily-variation']));

            const found = referencesLabels.find(e => e == item.date);
            if (!found)
                referencesLabels.push(item.date);
        }

        const dataset = {
            label: title,
            backgroundColor: chartColors[i],
            borderColor: chartColors[i],
            data: values,
            fill: false,
            fci: fciKey,
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


const addDataset = (results) => {
    if (window.myLine && results.length > 0) {
        const dataSetsCount = myLine.data.datasets.length;
        let title, fci;
        const values = [];

        fci = results[0].fci;
        title = results[0].description;

        for (let i = 0; i < results.length; i++) {
            const item = results[i];

            values.push(Number(item['daily-variation']));
        }

        const dataset = {
            label: title,
            backgroundColor: chartColors[dataSetsCount],
            borderColor: chartColors[dataSetsCount],
            data: values,
            fill: false,
            fci: fci,
        };

        myLine.data.datasets.push(dataset);
        myLine.update();
    }
};

const removeDataset = (fci) => {
    if (window.myLine) {
        const index = myLine.data.datasets.findIndex(e => e.fci == fci);

        if (index > 0) {
            myLine.data.datasets.splice(index, 1);
            myLine.update();
        }
    }
}

module.exports.loadChart = loadChart;
module.exports.addDataset = addDataset;
module.exports.removeDataset = removeDataset;
