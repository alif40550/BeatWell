import winston from 'winston';

// import { LoggingWinston } from '@google-cloud/logging-winston';

// const loggingWinston = new LoggingWinston();

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}`;
        }),
        winston.format.colorize({ all: true })
      ),
    }),
    // loggingWinston,
  ],
});
