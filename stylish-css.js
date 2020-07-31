const express = require('express');
const stylus = require('stylus');

const app = express();
const numberPort = process.argv[2];

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));   // Imposta i file statici

app.listen(numberPort);