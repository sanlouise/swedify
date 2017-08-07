const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const appHelper = require('./app.js')

app.use(bodyParser.json());
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache')
app.use(express.static('./public'));

let sentences = JSON.parse(fs.readFileSync('./sentences.json', 'utf8'));

const readSentences = () => {
  return JSON.parse(fs.readFileSync('./sentences.json').toString());
}

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

app.get('/', (request, response) => {
  response.render('index' );
})

app.get('/stockholm', (request, response) => {
  console.log(sentences);
  sentence = sentences[sentenceNumber];
  response.render('stockholm', { sentences, readSentences })
});

app.get('/goteborg', (request, response) => {
  response.render('goteborg', { sentences, readSentences })
});

app.get('/other', (request, response) => {
  response.render('other', { sentences, readSentences })
});

let succesfullyAttempted;
let sentenceNumber = 0;

app.post('/attempt/:id', (request, response) => {
  const sentenceId = parseInt(request.params.id);
  let currentSentence = sentences.find(sentence => sentence.id === sentenceId );
  succesfullyAttempted = false;

  if (attemptedSentence === sentence) {
    succesfullyAttempted = true;
    sentenceNumber = sentenceNumber++;
  }

  return response.render('game', { sentences, readSentences, sentenceNumber });
})
