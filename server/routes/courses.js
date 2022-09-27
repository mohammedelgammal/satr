const router = module.require("express").Router();
const { joiSchema, Course } = module.require("./models/course");
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
  "tools",
  "units",
  "tests",
  "paths",
  "onCompletion",
];

const populateFields = ["students", "units", "tests", "paths"];

router.get("/", async (req, res) => {
  const courses = await Course.find().populate(
    "students",
    "units",
    "tests",
    "paths"
  );
  if (!courses.length) {
    res.send(`No courses, start by adding some!`);
    return;
  }
  res.send(courses);
});

router.get("/:id", async (req, res) => {
  Course.findById(req.params.id, (err, course) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (!course) {
      res.status(404).send("Cannot find the course you are looking for!");
      return;
    }
    res.send(course);
  }).populate(...populateFields);
});

router.post("/", [auth, admin], (req, res) => {
  Course.findOne({ title: req.body.title }, async (err, course) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (course) {
      res.status(400).send(`${titleCase(course.title)} course already exists!`);
      return;
    }
    const { error } = joiSchema.validate(_.pick(req.body, pickedFields));
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const newCourse = new Course(_.pick(req.body, pickedFields));
    const result = await newCourse.save();
    res.status(201).send(result);
  }).populate(...populateFields);
});

router.put("/:id", [auth, admin], async (req, res) => {
  Course.findById(req.params.id, async (err, course) => {
    if (err) {
      res.status(400).send(`Error: ${err}`);
      return;
    }
    if (!course) {
      res.status(404).send("Cannot find the course you are looking for!");
      return;
    }
    const { error } = joiSchema.validate(
      _.pick(req.body, pickedFields.push(["progress", "students"]))
    );
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    course.set(_.pick(req.body, pickedFields.push(["progress", "students"])));
    const result = await course.save();
    res.status(200).send(result);
  }).populate(...populateFields);
});

router.delete("/:id", [auth, admin], (req, res) => {
  Course.findByIdAndRemove(req.params.id, { new: true }, (err, course) => {
    if (err) {
      res.status(400).send(`Error ${err}`);
      return;
    }
    if (!course) {
      res.status(404).send("Cannot find the course you are looking for!");
      return;
    }
    res.status(404).send(course);
  }).populate(...populateFields);
});

module.exports = router;
