import winston from "winston";

export const ejemplo1 = () => {
    const logConfig = {
        transports: [ new winston.transports.Console() ]
    };

    const logger = winston.createLogger(logConfig);

    logger.level = 'silly';

    logger.silly('mensaje con nivel silly');
    logger.debug('mensaje con nivel debug');
    logger.verbose('mensaje con nivel verbose');
    logger.info('mensaje con nivel info');
    logger.http('mensaje con nivel http');
    logger.warn('mensaje con nivel warn');
    logger.error('mensaje con nivel error');
}