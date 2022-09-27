const logger = module.require("../../startup/logger");

module.exports = (err, req, res, next) => {
  logger.error(`Unexpected ${err}`);
  res.status(500).send(`Unexpected ${err}`);
};
