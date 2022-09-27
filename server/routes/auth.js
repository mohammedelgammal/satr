const router = module.require("express").Router();
const Joi = module.require("joi");
const _ = module.require("lodash");
const { User } = module.require("./models/user");
const logger = module.require("../startup/logger");

const joiSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .min(10)
    .max(256)
    .required(),
  password: Joi.string().lowercase().min(10).max(1024).required(),
});

router.post("/", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (!user) {
      res.status(400).send("Invalid email or password");
      return;
    }
    const { error } = joiSchema.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    user.checkPassword(req.body.password, function (err, isMatch) {
      if (err) {
        logger.error(err);
        res.status(400).send("Something failed!");
        return;
      }
      const token = user.generateAuthToken();
      !isMatch
        ? res.status(400).send("Invalid email or password")
        : res.status(200).send(token);
    });
  });
});

module.exports = router;
