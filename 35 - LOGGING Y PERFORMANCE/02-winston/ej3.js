import winston from "winston";
import 'winston-mongodb';

export const ejemplo3 = () => {
    const logConfig = {
        transports: [
            winston.add(new winston.transports.MongoDB({
                options: { useUnifiedTopology: true },
                db: 'mongodb://localhost:27017/coderhouse',
                collection: 'logs',
                tryReconnect: true,
                level: 'error'
            }))
        ]
    };

    const logger = winston.createLogger(logConfig);

    logger.silly('mensaje con nivel silly');
    logger.debug('mensaje con nivel debug');
    logger.verbose('mensaje con nivel verbose');
    logger.info('mensaje con nivel info');
    logger.http('mensaje con nivel http');
    logger.warn('mensaje con nivel warn');
    logger.error('mensaje con nivel error');
}