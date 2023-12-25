const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide your email"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  phone_number: {
    type: Number,
  },
  birthday: {
    type: Date,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minlength: 8,
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, "confirm your password"],
    validate: {
      //this only works on create or  save
      validator: function (val) {
        return val === this.password;
      },
      message: "passwords are not the same",
    },
  },
});

const User = mongoose.model.User || mongoose.model("User", userSchema);
module.exports = User;
