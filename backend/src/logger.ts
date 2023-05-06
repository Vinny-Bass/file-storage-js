import pino from 'pino';

const logger = pino({
  level: 'info',
  prettyPrint: { colorize: true, translateTime: 'SYS:standard', ignore: 'pid,hostname' },
});

export default logger;
