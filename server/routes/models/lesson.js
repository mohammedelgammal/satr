module.require("mongoose-type-url");
const { Schema, SchemaTypes, model } = module.require("mongoose");
const Joi = module.require("joi").extend(module.require("@joi/date"));
Joi.objectId = module.require("joi-objectid")(Joi);

const lessonSchema = new Schema({
  title: {
    type: String,
    required: true,
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
  video: {
    type: SchemaTypes.Url,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  unit: {
    type: Schema.Types.ObjectId,
    ref: "Unit",
    required: true,
  },
  path: {
    type: Schema.Types.ObjectId,
    ref: "Path",
    required: true,
  },
});

const Lesson = model("Lesson", lessonSchema);

const joiSchema = Joi.object({
  title: Joi.string().lowercase().min(10).max(30).required(),
  description: Joi.string().lowercase().min(60).max(200).required(),
  video: Joi.string().uri().required(),
  isCompleted: Joi.boolean(),
  unit: Joi.objectId().required(),
  path: Joi.objectId().required(),
});

module.exports = {
  joiSchema,
  Lesson,
  lessonSchema,
};
