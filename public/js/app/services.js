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
