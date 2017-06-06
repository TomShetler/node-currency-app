const request = require('request');

var encodeCurrency = (currency, callback) => {
    var encodedCurrency = currency.toUpperCase();

    request({
        url: `http://api.fixer.io/latest?base=${encodedCurrency}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to servers');
        } else if (response.status === 422) {
            callback('Unable to find that currency');
        } else {
            callback(undefined, {
                base: body.base,
                date: body.date,
                rates: body.rates
            });
        }
    });
};

module.exports.encodeCurrency = encodeCurrency;
