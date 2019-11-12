const winston = require('winston');
const { existsSync, mkdirSync } = require('fs');
require('winston-daily-rotate-file');

const dir = './logs';

if (!existsSync(dir)) {
  mkdirSync(dir);
}

const transport = new (winston.transports.DailyRotateFile)({
  filename: `${dir}/%DATE%-DCA-app.log`,
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  level: 'debug',
  transports: [
    transport,
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.json(),
    }),
  );
}

module.exports = logger;
