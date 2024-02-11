const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  organizationId: {
    type: String,
    required: [true, "Please enter organizationId"],
  },
  userId: {
    type: String,
    required: [true, "Please enter userId"],
  },
  globalPermission: {
    type: [String],
    required: [true, "please enter globalPermission"],
  },
});

const Permission =
  mongoose.models.Permission || mongoose.model("Permission", permissionSchema);
export default Permission;
