const router = module.require("express").Router();
const { Lesson, joiSchema } = module.require("./models/lesson");
const _ = module.require("lodash");
const titleCase = module.require("../utils/titleCase");
const auth = module.require("../middleware/auth/auth");
const admin = module.require("../middleware/auth/admin");

const pickedFields = ["title", "description", "video", "unit", "path"];

router.get("/", auth, async (req, res) => {
  const lessons = await Lesson.find().populate("units", "paths");
  if (!lessons.length) {
    res.send(`No lessons, start by adding some!`);
    return;
  }
  res.send(lessons);
});

router.get("/:id", auth, async (req, res) => {
  Lesson.findById(req.params.id, (err, lesson) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (!lesson) {
      res.status(404).send("Cannot find the lesson you are looking for!");
      return;
    }
    res.send(lesson);
  }).populate("units", "paths");
});

router.post("/", [auth, admin], (req, res) => {
  Lesson.findOne({ title: req.body.title }, async (err, lesson) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (lesson) {
      res.status(400).send(`${titleCase(lesson.title)} lesson already exists!`);
      return;
    }
    const { error } = joiSchema.validate(_.pick(req.body, pickedFields));
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const newPath = new Lesson(_.pick(req.body, pickedFields));
    const result = await newPath.save();
    res.status(201).send(result);
  }).populate("units", "paths");
});

router.put("/:id", [auth, admin], async (req, res) => {
  Lesson.findById(req.params.id, async (err, lesson) => {
    if (err) {
      res.status(400).send(`Error: ${err}`);
      return;
    }
    if (!lesson) {
      res.status(404).send("Cannot find the lesson you are looking for!");
      return;
    }
    const { error } = joiSchema.validate(
      _.pick(req.body, pickedFields.push("isCompleted"))
    );
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    lesson.set(_.pick(req.body, pickedFields.push("isCompleted")));
    const result = await lesson.save();
    res.status(200).send(result);
  }).populate("units", "paths");
});

router.delete("/:id", [auth, admin], (req, res) => {
  Lesson.findByIdAndRemove(req.params.id, { new: true }, (err, lesson) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (!lesson) {
      res.status(404).send("Cannot find the lesson you are looking for!");
      return;
    }
    res.status(404).send(lesson);
  }).populate("units", "paths");
});

module.exports = router;
