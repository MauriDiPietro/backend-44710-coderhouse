import { createLogger, format, transports } from "winston";

const { combine, printf, timestamp, colorize, prettyPrint } = format;

export const ejemplo4 = () => {
    const logConfig = {
        level : 'silly',
        format: combine(
            timestamp({
                format: 'MMM-DD-YYYY HH:mm:ss'
            }),
            colorize(),
            printf((info) => `${info.level} | ${[info.timestamp]} | ${info.message}`)
            // prettyPrint()
        ),
        transports: [ new transports.Console() ]
    };

    const logger = createLogger(logConfig);


    logger.silly('mensaje con nivel silly');
    logger.debug('mensaje con nivel debug');
    logger.verbose('mensaje con nivel verbose');
    logger.info('mensaje con nivel info');
    logger.http('mensaje con nivel http');
    logger.warn('mensaje con nivel warn');
    logger.error('mensaje con nivel error');
}