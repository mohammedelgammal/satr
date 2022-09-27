const { Schema, model } = module.require("mongoose");
const Joi = module.require("joi").extend(module.require("joi-phone-number"));
const bcrypt = module.require("bcrypt");
const saltRounds = 10;
const jwt = module.require("jsonwebtoken");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minLength: 10,
    maxLength: 30,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minLength: 5,
    maxLength: 30,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 1024,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minLength: 10,
    maxLength: 256,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function (next) {
  !this.isModified("password")
    ? next()
    : bcrypt.hash(this.password, saltRounds, (err, hash) => {
        err
          ? next(err)
          : (() => {
              this.password = hash;
              next();
            })();
      });
});

userSchema.methods.checkPassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    err ? callback(err) : callback(null, isMatch);
  });
};

userSchema.methods.generateAuthToken = function () {
  const payload = { _id: this._id, isAdmin: this.isAdmin };
  const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
  return token;
};

const User = model("User", userSchema);

const joiSchema = Joi.object({
  fullName: Joi.string().lowercase().min(10).max(30).required(),
  username: Joi.string()
    .alphanum()
    .lowercase()
    .min(5)
    .max(30)
    .regex(/^\S*$/)
    .required(),
  password: Joi.string().lowercase().min(10).max(1024).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .min(10)
    .max(256)
    .required(),
  phone: Joi.string().phoneNumber({
    defaultCountry: "EG",
    format: "international",
  }),
  joinDate: Joi.date(),
});

module.exports = {
  joiSchema,
  User,
  userSchema,
};
