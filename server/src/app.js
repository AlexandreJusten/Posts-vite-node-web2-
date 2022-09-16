import express, { request } from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

import router from './routes.js';
app.use(router);



app.listen(5000,() =>console.log('HTTP port: 5000'));
https.createServer({
    cert: fs.readFileSync('src/ssl/code.crt'),
    key: fs.readFileSync('src/ssl/code.key')
},app).listen(5001,()=>{
    console.log('HTTPS porta: 5001');
});