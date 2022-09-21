const express = require('express');
const bodyParser = require('body-parser');

const getTalker = require('./Midlewares/getTalker');
const getTalkerId = require('./Midlewares/getTalkerId');
const { randomToken, validateInput } = require('./Midlewares/postLogin');
const {
  tokenValidation,
  nameValidate,
  ageValidate,
  talkValidate,
  rateValidate,
  watchedValidate,
} = require('./Midlewares/validateTalker');
const postTalker = require('./Midlewares/postTalker.js');

const editTalker = require('./Midlewares/putTalkerId');

const deleteTalkerById = require('./Midlewares/deleteTalkerId');

const searchTermoTalker = require('./Midlewares/getTalkerSearch');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.post('/login', validateInput, randomToken);

app.get('/talker/search', tokenValidation, searchTermoTalker);

app.get('/talker', getTalker);

app.get('/talker/:id', getTalkerId);

app.use(tokenValidation);

app.delete('/talker/:id', deleteTalkerById);

app.use(
  nameValidate,
  ageValidate,
  talkValidate,
  watchedValidate,
  rateValidate,
);

app.post('/talker', postTalker);

app.put('/talker/:id', editTalker);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
// Kamila was here
