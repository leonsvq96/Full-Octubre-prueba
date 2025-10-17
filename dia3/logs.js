const logger = require('node-color-log');
let message = 'Hello, World!';

// Success level, with prefix "[SUCCESS]"
logger.success(message);
// debug level, with prefix "[DEBUG]"
logger.debug(message);
// Info level, with prefix "[INFO]"
logger.info(message);
// Warn level, with prefix "[WARN]"
logger.warn(message);
// Error level, with prefix "[ERROR]"
logger.error(message);