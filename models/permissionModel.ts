const mongoose = require("mongoose");
import Organization from "./organizationModel";
import User from "./userModel";

const permissionSchema = new mongoose.Schema({
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Organization,
    required: [true, "Please enter organization Id"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: [true, "Please enter user id"],
  },
  globalPermission: {
    type: [String],
    required: [true, "please enter globalPermission"],
  },
});

const Permission =
  mongoose.models.Permission || mongoose.model("Permission", permissionSchema);
export default Permission;
