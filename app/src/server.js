// Register alias paths for cleaner development.
require('module-alias/register')

// Setup express server.
const express = require('express');
const useTrueToSizeRouter = require('@true-to-size/router');
const HOST = '0.0.0.0';
const PORT = 3000;
const server = express();

server.use(express.json());
useTrueToSizeRouter(server);
server.listen(PORT, HOST, () => console.log(`Listening on http://${HOST}:${PORT}`));