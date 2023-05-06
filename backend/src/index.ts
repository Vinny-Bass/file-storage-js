import * as https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import logger from './logger';

const PORT = process.env.PORT || 8080;

const options: https.ServerOptions = {
  key: fs.readFileSync(path.resolve(__dirname, '../certificates/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '../certificates/cert.pem')),
};

const server = https.createServer(options, (req, res) => {
  res.end('hello world');
});

server.listen(PORT, () => {
  const addressInfo = server.address();
  if (typeof addressInfo === 'string') {
    console.log(`Secure server is listening on ${addressInfo}`);
    logger.
  } else if (addressInfo !== null) {
    console.log(`Secure server is listening on https://${addressInfo.address}:${addressInfo.port}`);
  } else {
    console.error('Failed to get server address information.');
  }
});
