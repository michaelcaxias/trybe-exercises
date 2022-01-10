const fs = require('fs');

const simpsonsJSON = './simpsons.json';

const simpsons = JSON.parse(fs.readFileSync(simpsonsJSON, 'utf8'));

console.log(simpsons);