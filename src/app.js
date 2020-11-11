import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import { environment } from './env';
import pjson from '../package.json';

import corsMiddleware from './middlewares/cors';
import notFoundMiddleware from './middlewares/not-found';
import loggerMiddleware from './middlewares/logger';

const app = express();
const server = http.Server(app);
app.set('port', (environment.PORT));

app.use(corsMiddleware);
app.use(compression());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(loggerMiddleware);

import application from './app/index';
app.use('/api', application);

app.use(notFoundMiddleware);

server.listen(app.get('port'), () => {
    console.log(`Started version ${pjson.version} on port ${app.get('port')} in ${process.env.NODE_ENV} mode`);
});