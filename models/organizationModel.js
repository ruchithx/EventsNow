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
  organizationName: {
    type: String,
    required: [true, "please enter organization name"],
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

  postImageLink: {
    type: String,
    required: [true, "Please provide a post image link"],
  },
  isActive: {
    type: Boolean,
  },
});

const Organization =
  mongoose.models.Organization ||
  mongoose.model("Organization", organizationSchema);
export default Organization;
