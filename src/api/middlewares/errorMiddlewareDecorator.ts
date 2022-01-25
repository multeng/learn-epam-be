import { Request, Response, NextFunction } from 'express';
import { createLogger, format, transports } from 'winston';

const { combine, errors, printf, timestamp, colorize } = format;

const logger = createLogger({
  transports: [new transports.Console()],
  format: combine(
    timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
    colorize(),
    errors(),
    printf(({ timestamp, level, message, meta }) => {
      return `${timestamp}; ${level}; ${message}; ${meta ? JSON.stringify(meta) : ''}`;
    })
  ),
});

export function catchErrorDecorator(target: any, key: string, desc: PropertyDescriptor) {
  const method = desc.value;
  desc.value = function (req: Request, res: Response, next: NextFunction) {
    method.call(this, req, res, next).catch((error: any) => {
      logger.error(error);
      next();
    });
  };
}
