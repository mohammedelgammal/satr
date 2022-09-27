module.require("express-async-errors");
const winston = module.require("winston");
module.require("winston-mongodb");

module.exports = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.MongoDB({
      db: "mongodb://localhost:27017/genres-db",
      options: {
        useUnifiedTopology: true,
      },
      collection: "server_logs",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
    new winston.transports.File({
      filename: "./log/combine.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
    new winston.transports.Console({
      colorize: true,
      prettyPrint: true,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: "./log/uncaughtExceptions.log",
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: "./log/uncaughtRejections.log",
    }),
  ],
});
