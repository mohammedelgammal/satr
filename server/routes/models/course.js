const { Schema, model } = module.require("mongoose");
const Joi = module.require("joi").extend(module.require("@joi/date"));
Joi.objectId = module.require("joi-objectid")(Joi);

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minLength: 10,
    maxLength: 30,
  },
  description: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minLength: 60,
    maxLength: 200,
  },
  level: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
  duration: {
    type: Number,
    required: true,
    min: 2,
    max: 100,
  },
  requirements: {
    type: String,
    default: "No prior knowledge is requried",
    lowercase: true,
    trim: true,
    minLength: 10,
    maxLength: 50,
  },
  tools: {
    type: String,
    default: "No tools are requried",
    lowercase: true,
    trim: true,
    minLength: 10,
    maxLength: 50,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  units: [
    {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
  ],
  tests: [
    {
      type: Schema.Types.ObjectId,
      ref: "Test",
      required: true,
    },
  ],
  paths: [
    {
      type: Schema.Types.ObjectId,
      ref: "Path",
      required: true,
    },
  ],
  onCompletion: [
    {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minLength: 10,
      maxLength: 100,
    },
  ],
});

const Course = model("Course", courseSchema);

const joiSchema = Joi.object({
  title: Joi.string().lowercase().min(10).max(30).required(),
  description: Joi.string().lowercase().min(60).max(200).required(),
  level: Joi.string().valid("beginner", "intermediate", "advanced").required(),
  duration: Joi.number().integer().positive().min(2).max(100).required(),
  requirements: Joi.string().lowercase().min(10).max(50).required(),
  tools: Joi.string().lowercase().min(10).max(50).required(),
  date: Joi.date(),
  progress: Joi.number().integer().positive().min(2).max(100),
  students: Joi.array().items(Joi.objectId()),
  units: Joi.array().items(Joi.objectId()).required(),
  tests: Joi.array().items(Joi.objectId()).required(),
  paths: Joi.array().items(Joi.objectId()).required(),
  onCompletion: Joi.array()
    .items(Joi.string().required().lowercase().min(10).max(30))
    .required(),
});

module.exports = {
  joiSchema,
  courseSchema,
  Course,
};
