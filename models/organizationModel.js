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
  number:{
    type:String,
    required:[true,"please enter id number"],
  },
  companyName:{
    type:String,
    required:[false],
  },
  organizationName:{
    type:String,
    required:[true,"please enter organization name"],
  },
  address:{
    type:String,
    required:[true,"please enter address"],
  },
  phoneNumber: {
    type: String,
    required:[true,"please enter phone number"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  
});


const Organization = mongoose.models.Organization || mongoose.model("Organization", organizationSchema);
export default Organization;
