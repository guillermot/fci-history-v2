const webRequestPromise = require('./web-request-promise');
const url = 'http://www.fondosfima.com.ar/personas/herramientas/valor-de-cuotaparte/';
// [^<]
// const regex = /(<tr><td.*?>.*?<b.*?>(.*?)<\/b><\/td>.*?<td.*?><img.*?title="(.*?)".*?<\/td>.*?<td.*?>(.*?)<\/td>.*?<td.*?>(.*?)<\/td>.*?<td.*?>.*?<td.*?>(.*?)<\/td>.*?<td.*?><\/tr>)/g;
//const regex = /(<form.*?>.*?<\/form>)/g;
const regex = /(<form\sname="frmComp".*?>.*?<\/form>)/g;

module.exports.crawler = () => {
    return webRequestPromise.webRequest(url).then((html) => {
        const results = [];
        let match;

        while (match = regex.exec(html)) {
            const item = {
                fci: match[2],
                description: match[2],
                currency: match[3],
                price: match[4],
                'daily-variation': match[5],
                'monthly-variation': match[6],
            };

            results.push(item);
        }

        return results;
    });
};