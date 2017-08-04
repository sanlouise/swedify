const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache')

app.listen(3000, () => {
  console.log('Listening on port 3000');
})

app.get('/', (request, response) => {
  response.render('index');
})

app.get('/stockholm', (request, response) => {
  response.render('stockholm')
});

app.get('/goteborg', (request, response) => {
  response.render('goteborg')
});

app.get('/other', (request, response) => {
  response.render('other')
});

app.post('/attempt', (request, response) => {
  return response.render('game');
})
