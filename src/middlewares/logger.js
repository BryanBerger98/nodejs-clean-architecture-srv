import express from 'express';
import logger from 'simple-node-logger';
import { environment } from '../env/index';

const app = express();

const fs = require('fs');

fs.mkdir(environment.LOGS_PATH, {recursive: true}, (error) => {
    if (error) {
        console.error(error);
    }
});

const opts = {
    logDirectory: environment.LOGS_PATH,
    fileNamePattern:'roll-<DATE>.log',
    dateFormat:'YYYY.MM.DD'
};
const log = logger.createRollingFileLogger(opts);

app.use((req, res, next) => {
    const now = Date.now();
    
    res.on('close', () => {
        const latency = Date.now() - now;
        if (res.statusCode >= 500 && res.statusCode < 600) {
            log.error(req.ip + ' ' + res.statusCode + ' ' + req.method + ' ' + req.originalUrl + ' ' + latency + 'ms');
        } else if (res.statusCode >= 400 && res.statusCode < 500) {
            log.warn(req.ip + ' ' + res.statusCode + ' ' + req.method + ' ' + req.originalUrl + ' ' + latency + 'ms');
        } else if (res.statusCode >= 200 && res.statusCode < 400) {
            log.info(req.ip + ' ' + res.statusCode + ' ' + req.method + ' ' + req.originalUrl + ' ' + latency + 'ms');
        }
    });
    next();
});

export default app;