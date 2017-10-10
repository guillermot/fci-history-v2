const bbvaFciUrl = 'https://hb.bbv.com.ar/fnet/mod/inversiones/NL-FondosSC.jsp';
const webRequestPromise = require('./web-request-promise');

exports.crawler = () => {
    return webRequestPromise.webRequest(bbvaFciUrl).then((html) => {
        let regexRows = /(<tr\sclass='tr2'.*?><td.*?><span.*?>(.*?)\s*?\<\/span><\/td\s*?>.*?<td.*?><span.*?>(.*?)\s*?\<\/span><\/td\s*?>.*?<td.*?><span.*?>(.*?)\s*?\<\/span><\/td\s*?>.*?<td.*?><span.*?>(.*?)\s*?\<\/span><\/td\s*?>.*?<td.*?><span.*?>(.*?)\s*?\<\/span><\/td\s*?>.*?<td.*?><span.*?>(.*?)\s*?\<\/span><\/td\s*?>.*?<\/tr>)/g;
        const results = [];

        try {
            let match;

            while (match = regexRows.exec(html)) {
                results.push({
                    fci: match[2],
                    description : match[3],
                    currency: match[4],
                    price: match[5],
                    'daily-variation': match[6],
                    'monthly-variation': match[7],
                });
            }
        } catch (error) {
            console.error(error);
        }

        return results;
    });
};