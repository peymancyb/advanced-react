import express from 'express';
import config from './config.js';
import serverRender from 'renderers/server';
import { data } from './testData';

//initializing express app
const app = express();

app.use(express.static('public'));
//we need to configure express to use ejs as its template language
app.set('view engine','ejs');

app.get('/', async (req,res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent });
});


app.get('/data',(req,res) => {
  res.send(data);
});


app.listen(config.port,function listenHandler(){
  console.log(`Running on ${config.port}...`);
});
