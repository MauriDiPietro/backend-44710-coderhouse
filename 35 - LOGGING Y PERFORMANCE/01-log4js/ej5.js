import log4js from 'log4js';

export const ejemplo5 = () => {
    log4js.configure({       
        appenders: {
            fileAppender: { type: 'file', filename: './logs/example-5.log' },
            consoleAppender: { type: 'console' }
        },
        categories: {
            default: { appenders: ['fileAppender', 'consoleAppender'], level: 'trace' },
            dev: { appenders: ['consoleAppender'], level: 'trace' },
            prod: { appenders: ['fileAppender'], level: 'error'}
        }
    });

    const ENV = 'prod';

    let logger = log4js.getLogger();

    if(ENV === 'prod') logger = log4js.getLogger('prod');
    else logger = log4js.getLogger('dev');

    logger.trace('mensaje con nivel trace');
    logger.debug('mensaje con nivel debug');
    logger.info('mensaje con nivel info');
    logger.warn('mensaje con nivel warn');
    logger.error('mensaje con nivel error');
    logger.fatal('mensaje con nivel fatal');
}