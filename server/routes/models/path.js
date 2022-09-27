const { Schema, model } = module.require("mongoose");
const Joi = module.require("joi").extend(module.require("@joi/date"));
Joi.objectId = module.require("joi-objectid")(Joi);

const pathSchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
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

const Path = model("Path", pathSchema);

const joiSchema = Joi.object({
  title: Joi.string().lowercase().min(10).max(30).required(),
  description: Joi.string().lowercase().min(60).max(200).required(),
  level: Joi.string().valid("beginner", "intermediate", "advanced").required(),
  duration: Joi.number().integer().positive().min(2).max(100).required(),
  requirements: Joi.string().lowercase().min(10).max(50).required(),
  students: Joi.array().items(Joi.objectId()),
  courses: Joi.array().items(Joi.objectId()).required(),
  onCompletion: Joi.array()
    .items(Joi.string().required().lowercase().min(10).max(30))
    .required(),
});

module.exports = {
  joiSchema,
  Path,
  pathSchema,
};
