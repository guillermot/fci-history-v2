const webRequestPromise = require('./web-request-promise');

var fs = require('fs');

const url = 'http://www.fondosfima.com.ar/personas/herramientas/valor-de-cuotaparte/';
// [^<]
// const regex = /(<tr><td.*?>.*?<b.*?>(.*?)<\/b><\/td>.*?<td.*?><img.*?title="(.*?)".*?<\/td>.*?<td.*?>(.*?)<\/td>.*?<td.*?>(.*?)<\/td>.*?<td.*?>.*?<td.*?>(.*?)<\/td>.*?<td.*?><\/tr>)/g;
//const regex = /(<form.*?>.*?<\/form>)/g;

module.exports.crawler = () => {
    return webRequestPromise.webRequest(url).then((html) => {
        const results = [];
        let tableMatch, rowMatch;

        html = html.replace(/\r/g, " ");
        html = html.replace(/\n/g, " ");
        html = html.replace(/\t/g, " ");

        const tableRegex = /<form\sname="frmComp".*?><table.*?>(.*?)<\/table>.*?<\/form>/img;
        const rowRegex = /(<tr><td\sclass="fondo".*?>.*?<b.*?>(.*?)<\/b>.*?<\/td>.*?<td.*?>.*?<img.*?title="(.*?)".*?<\/td><td.*?>(.*?)<\/td>.*?<td.*?>(.*?)<\/td>.*?<td.*?><td.*?>(.*?)<\/td>.*?<td.*?(<\/td>|\/>)<\/tr>)/img;

        while (tableMatch = tableRegex.exec(html)) {
            const rowHtml = tableMatch[1];

            while (rowMatch = rowRegex.exec(rowHtml)) {
                const item = {
                    fci: rowMatch[2],
                    description: rowMatch[2],
                    currency: rowMatch[3],
                    price: rowMatch[4],
                    'daily-variation': rowMatch[5],
                    'monthly-variation': rowMatch[6],
                };

                results.push(item);
            }
        }

        return results;
    });
};