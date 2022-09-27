const express = module.require("express");
const pathsRouter = module.require("../routes/paths");
const coursesRouter = module.require("../routes/courses");
const lessonsRouter = module.require("../routes/lessons");
const usersRouter = module.require("../routes/users");
const authRouter = module.require("../routes/auth");
const error = module.require("../middleware/error/error");
const logger = module.require("./logger");

module.exports = (app) => {
  if (!process.env.JWT_PRIVATE_KEY) {
    logger.error("Fatal Error: JWT Private key is not defined.");
    process.exit(1);
  }
  app.use(express.json());
  app.use("/api/paths", pathsRouter);
  app.use("/api/courses", coursesRouter);
  app.use("/api/lessons", lessonsRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authRouter);
  app.use(error);
};
