const router = module.require("express").Router();
const { User, joiSchema } = module.require("./models/user");
const _ = module.require("lodash");
const titleCase = module.require("../utils/titleCase");
const auth = module.require("../middleware/auth/auth");

const pickedFields = ["fullName", "username", "password", "email", "phone"];

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select(
    "fullName username email -_id"
  );
  console.log(req.user);
  res.status(200).send(user);
});

router.post("/", (req, res) => {
  User.findOne(
    {
      $or: [
        { username: req.body.username },
        { email: req.body.email },
        { phone: req.body.phone },
      ],
    },
    async (err, user) => {
      if (err) {
        res.status(400).send(`Error ${err}`);
        return;
      }
      if (user) {
        res.status(400).send(`${titleCase(user.username)} already registered!`);
        return;
      }
      const { error } = joiSchema.validate(_.pick(req.body, pickedFields));
      if (error) {
        res.status(400).send(error.details[0].message);
        return;
      }
      const newUser = new User(_.pick(req.body, pickedFields));
      await newUser.save();
      const token = newUser.generateAuthToken();
      res
        .header("x-auth-token", token)
        .status(201)
        .send(_.pick(newUser, ["_id", "name", "email"]));
    }
  );
});

module.exports = router;
