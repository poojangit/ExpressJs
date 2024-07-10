const express = require('express');
const app = express();
const port = 3004

app.get('/', (req, res) => {
  res.json({message: 'Hello,world!'});
})
app.listen(port, ()=> {
  console.log(`Server is running`)
});
app.get('/api/data',(req,res) => {
  const data = getDBQuery();
  res.json(data)
})
function getDBQuery() {
  return [
    {id: 1, name: 'pooja'},
    {id: 2, name: 'preethi'}
  ]
}

const axios = require('axios');
const { error } = require('winston');

axios.get('http://localhost:3004/api/data')
    .then(response=> {
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error fetching data: ', error)
    })
// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';

// import routes from './routes';
// import {
//   appErrorHandler,
//   genericErrorHandler,
//   notFound
// } from './middlewares/error.middleware';
// import logger, { logStream } from './config/logger';

// import morgan from 'morgan';

// const app = express();
// const host = process.env.APP_HOST;
// const port = process.env.APP_PORT;
// const api_version = process.env.API_VERSION;

// app.use(cors());
// app.use(helmet());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(morgan('combined', { stream: logStream }));

// app.use(`/api/${api_version}`, routes());
// app.use(appErrorHandler);
// app.use(genericErrorHandler);
// app.use(notFound);

// app.listen(port, () => {
//   logger.info(`Server started at ${host}:${port}/api/${api_version}/`);
// });

// export default app;
