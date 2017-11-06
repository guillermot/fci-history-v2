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