const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.engine('mustache', mustacheExpress());
app.set('views', './templates');
app.set('view engine', 'mustache')
