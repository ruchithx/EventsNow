import { string } from "zod";

const mongoose = require("mongoose");

const validator = require("validator");

const organizationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  numberType: {
    type: String,
    required: [true, "Please select number type"],
  },
  number: {
    type: String,
    required: [true, "please enter id number"],
  },
  companyName: {
    type: String,
    required: [true, "please enter company name"],
  },
  address: {
    type: String,
    required: [true, "please enter address"],
  },
  phoneNumber: {
    type: String,
    required: [true, "please enter phone number"],
  },
  bank: String,
  branch: String,
  accountNumber: String,
  accountName: String,
  payout: String,
  email: {
    type: String,
    required: [true, "Please provide your email"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  isActive: {
    type: Boolean,
  },
});

// userSchema.pre("save", async function (next) {
//   //only run this function if password was actually modified
//   if (!this.isModified("password")) return next();

//   //hash the password with cost of 12
//   this.password = await bcrypt.hash(this.password, 12);

//   //delete passwordConfirm field
//   this.passwordConfirm = undefined;
//   next();
// });

const Organization =
  mongoose.models.Organization ||
  mongoose.model("Organization", organizationSchema);
export default Organization;
