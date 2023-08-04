import log4js from 'log4js';

export const ejemplo4 = () => {
    log4js.configure({       
        appenders: {
            fileAppender: { type: 'file', filename: './logs/example-4.log' },
            consoleAppender: { type: 'console' }
        },
        categories: {
            default: { appenders: ['fileAppender', 'consoleAppender'], level: 'info' },
            myLogger: { appenders: ['consoleAppender'], level: 'fatal' }
        }
    });

    const logger = log4js.getLogger('myLogger');

    logger.trace('mensaje con nivel trace');
    logger.debug('mensaje con nivel debug');
    logger.info('mensaje con nivel info');
    logger.warn('mensaje con nivel warn');
    logger.error('mensaje con nivel error');
    logger.fatal('mensaje con nivel fatal');
}