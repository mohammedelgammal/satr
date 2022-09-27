const router = module.require("express").Router();
const { Path, joiSchema } = module.require("./models/path");
const _ = module.require("lodash");
const titleCase = module.require("../utils/titleCase");
const auth = module.require("../middleware/auth/auth");
const admin = module.require("../middleware/auth/admin");

const pickedFields = [
  "title",
  "description",
  "level",
  "duration",
  "requirements",
  "courses",
  "onCompletion",
];

const populateFields = ["students", "courses"];

router.get("/", async (req, res) => {
  const paths = await Path.find().populate(...populateFields);
  if (!paths.length) {
    res.send(`No paths, start by adding some!`);
    return;
  }
  res.send(paths);
});

router.get("/:id", async (req, res) => {
  Path.findById(req.params.id, (err, path) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (!path) {
      res.status(404).send("Cannot find the path you are looking for!");
      return;
    }
    res.send(path);
  }).populate(...populateFields);
});

router.post("/", [auth, admin], (req, res) => {
  Path.findOne({ title: req.body.title }, async (err, path) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (path) {
      res.status(400).send(`${titleCase(path.title)} path already exists!`);
      return;
    }
    const { error } = joiSchema.validate(_.pick(req.body, pickedFields));
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const newPath = new Path(_.pick(req.body, pickedFields));
    const result = await newPath.save();
    res.status(201).send(result);
  }).populate(...populateFields);
});

router.put("/:id", [auth, admin], async (req, res) => {
  Path.findById(req.params.id, async (err, path) => {
    if (err) {
      res.status(400).send(`Error: ${err}`);
      return;
    }
    if (!path) {
      res.status(404).send("Cannot find the path you are looking for!");
      return;
    }
    const { error } = joiSchema.validate(_.pick(req.body, pickedFields));
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    path.set(_.pick(req.body, pickedFields));
    const result = await path.save();
    res.status(200).send(result);
  }).populate(...populateFields);
});

router.delete("/:id", [auth, admin], (req, res) => {
  Path.findByIdAndRemove(req.params.id, { new: true }, (err, path) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (!path) {
      res.status(404).send("Cannot find the path you are looking for!");
      return;
    }
    res.status(404).send(path);
  }).populate(...populateFields);
});

module.exports = router;
