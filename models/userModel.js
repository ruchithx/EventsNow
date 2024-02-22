const mongoose = require("mongoose");

const validator = require("validator");
import bcrypt from "bcrypt";

// const bcrypt = require("bcryptjs");

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

  birthday: {
    type: String,
  },
  password: {
    type: String,

    minlength: 8,
    select: false,
  },
  image: {
    type: String,
  },

  passwordConfirm: {
    type: String,

    validate: {
      //this only works on create or  save
      validator: function (val) {
        return val === this.password;
      },
      message: "passwords are not the same",
    },
  },
  mobileNumber: {
    type: Number,
    validate: {
      validator: function (val) {
        return /^[789]\d{9}$/.test(val.toString());
      },
      message: "Please provide a valid mobile number",
    },
  },
  primaryEmail: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  tshirtSize: {
    type: String,
  },
  meal: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  //only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  if (this.birthday instanceof Date) {
    this.birthday = this.birthday.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format
  }

  //hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
