import express from 'express';
import cors from 'cors';
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Origin ' + origin + ' not allowed by CORS'));
    }
  },
  credentials: true
}

app.use(cors());

export default app;