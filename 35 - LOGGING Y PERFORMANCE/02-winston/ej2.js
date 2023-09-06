import winston from "winston";

export const ejemplo2 = () => {
    const logConfig = {
        level : 'info',
        transports: [ 
            new winston.transports.Console({ level: 'verbose' }),
            new winston.transports.File({
                filename: './logs/error-ej2.log',
                level: 'error',
            }),
            new winston.transports.File({
                filename: './logs/info-ej2.log'
            })  
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