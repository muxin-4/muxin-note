module.export.test = 'A';

const modB = require('./02_requireB')
console.log('modA' + modB.test)

module.export.test = 'aa';
