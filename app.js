const fs = require('fs');
let sentences = JSON.parse(fs.readFileSync('./sentences.json', 'utf8'));

const readSentences = () => {
  return JSON.parse(fs.readFileSync('./sentences.json').toString());
}

module.exports = { sentences, readSentences };
