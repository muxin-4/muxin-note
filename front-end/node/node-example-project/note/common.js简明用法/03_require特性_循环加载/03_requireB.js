module.export.test = 'B';

const modA = require('./01_requireA');
console.log('modB:', modA.test);

module.exports.test = 'BB';
