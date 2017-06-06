const yargs = require('yargs');
const encode = require('./encode.js');

const argv = yargs
    .options({
        c: {
            alias: 'currency',
            demand: true,
            describe: 'Enter the currency you would like to convert',
            string: true
        }
   }).help()
    .alias('help', 'h')
    .argv;

encode.encodeCurrency(argv.currency, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log('The base currency:',results.base);
        console.log('The current date:',results.date);
        console.log('Exchange rates:',results.rates);
    }
});
