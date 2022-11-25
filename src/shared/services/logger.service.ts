import { LogLevel } from '@common/constants/log-level';
import * as winston from 'winston';

export class LoggerService {
  winstonInstance() {
    return winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'isoDateTime' }),
        winston.format.json(),
        winston.format.colorize({ all: true }),
        winston.format.align(),
      ),
      transports: [
        new winston.transports.Console({ level: LogLevel.INFO }),
        new winston.transports.File({
          filename: 'errors.log',
          level: LogLevel.ERROR,
          dirname: 'logs',
        }),
        new winston.transports.File({ filename: 'combined.log', dirname: 'logs' }),
      ],
    });
  }
}
