# InstaLog

InstaLog is a highly configurable and modular logging library for Node.js. It provides flexibility in handling log messages, with support for various transports, custom log levels, and customizable log message formatting. Whether you want to log messages to files, databases, Elasticsearch, Fluentd, or the console, InstaLog has you covered.

## Features

- **Modular and Extensible**: InstaLog is designed with modularity in mind. You can easily add or customize transports, log levels, and formatters to suit your needs.

- **Multiple Transports**: InstaLog supports various transport options, including file, MongoDB, Elasticsearch, Fluentd, and the console. You can even create your own custom transports.

- **Custom Log Levels**: Define your own log levels beyond the standard info, warn, error, debug, verbose, and JSON log levels.

- **Log Rotation**: Log files can be rotated based on a specified size to manage log file growth.

- **Color-Coded Console Output**: Logs to the console are displayed in different colors based on their log levels for easy visual differentiation.

## Installation

You can install InstaLog via npm:

```bash
npm install instalog
```

## Usage

```javascipt
const { Logger, FileTransport, MongoDBTransport, ElasticsearchTransport, ConsoleTransport } = require('instalog');

const fileTransport = new FileTransport('app.log');
const mongoDBTransport = new MongoDBTransport('mongodb://localhost:27017', 'logs');
const elasticsearchTransport = new ElasticsearchTransport(elasticsearchConfig);
const consoleTransport = new ConsoleTransport(); // Color-coded console output

const logger = new Logger({
  transports: [fileTransport, mongoDBTransport, elasticsearchTransport, consoleTransport],
  // ... other configuration ...
});

logger.info('This is an info message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
logger.debug('This is a debug message.');
logger.verbose('This is a verbose message.');
logger.json({ key: 'value' });
```

## Configuration

InstaLog is highly configurrarble. You can customize the following aspects:

- Trransports: Add o ermove tansport options according to your requirements.
- Log Levels: Define custom log levels or ruse the standard ones.
- Log Fomatting: Customize log message fomatting.
- Log rotation: Set log rotation size for log files.
- Console Output: Enable or disable colo coded console output.

## Examples:

For more detailed examples and use cases, check out the examples folde in this repository

## License:

This project is licensed under the MIT License - see the LICENSE file fo details.
