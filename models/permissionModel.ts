const mongoose = require("mongoose");
import Event from "./eventModel";
import Organization from "./organizationModel";
import User from "./userModel";

const permissionSchema = new mongoose.Schema({
  organizationId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: Organization,
    type: String,
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
  eventPermission: {
    type: [
      {
        _id: false,
        eventId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: Event,
        },
        eventPermission: [String],
      },
    ],
  },
});

const Permission =
  mongoose.models.Permission || mongoose.model("Permission", permissionSchema);
export default Permission;
