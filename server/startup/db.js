const mongoose = module.require("mongoose");
const logger = module.require("./logger");

module.exports = () =>
  mongoose
    .connect("mongodb://localhost:27017/satr-db")
    .then(() => logger.info("Connected to MongoDB port: 27017"));
