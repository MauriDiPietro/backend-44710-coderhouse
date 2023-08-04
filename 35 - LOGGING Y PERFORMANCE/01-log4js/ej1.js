import log4js from 'log4js';

const logger = log4js.getLogger();

logger.level = 'warn';

export const ejemplo1 = () => {
    logger.trace('mensaje con nivel trace');
    logger.debug('mensaje con nivel debug');
    logger.info('mensaje con nivel info');
    logger.warn('mensaje con nivel warn');
    logger.error('mensaje con nivel error');
    logger.fatal('mensaje con nivel fatal');
}