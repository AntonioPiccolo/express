const express = require('express');
const { pathToFileURL } = require('url');

const numberPort = process.argv[2];
const indexFile = process.argv[3];

const app = express();

app.use(express.static(indexFile || path.join('index.html', 'public')));

app.listen(numberPort);