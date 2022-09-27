const app = module.require("express")();
const logger = module.require("./startup/logger");
module.require("dotenv").config();
module.require("./startup/routing")(app);
module.require("./startup/db")();

const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () =>
  logger.info(`Connected to localhost, port:${serverPort}`)
);
