import pino from 'pino-http';

export const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      
      translateTime: 'HH:MM:ss',
      
      messageFormat:
        '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
     
    },
  },
});
