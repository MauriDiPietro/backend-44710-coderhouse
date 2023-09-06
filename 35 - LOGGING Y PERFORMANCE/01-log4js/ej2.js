import log4js from 'log4js';

export const ejemplo2 = () => {
    log4js.configure({
        appenders: {
            fileAppender: { type: 'file', filename: './logs/example-2.log' }
        },
        categories: {
            default: { appenders: ['fileAppender'], level: 'trace' }
        }
    });

    const logger = log4js.getLogger();

    logger.trace('mensaje con nivel trace');
    logger.debug('mensaje con nivel debug');
    logger.info('mensaje con nivel info');
    logger.warn('mensaje con nivel warn');
    logger.error('mensaje con nivel error');
    logger.fatal('mensaje con nivel fatal');
}