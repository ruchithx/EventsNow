const mongoose = require("mongoose");
import Organization from "./organizationModel";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, "Please enter the event name"],
  },

  selectedTab: {
    type: String,
    required: [true, "Please select the event type"],
  },
  eventLocation: {
    type: String,
    required: [true, "please enter event location"],
  },
  eventStartDate: {
    type: String,
    required: [true, "Please select the event start date"],
  },
  eventEndDate: {
    type: String,
    required: [true, "Please select the event end date"],
  },
  startTime: {
    type: String,
    required: [true, "Please select the event start time"],
  },
  endTime: {
    type: String,
    required: [true, "Please select the event end time"],
  },

  description: {
    type: String,
  },
  coverImage: {
    type: String,
    required: [true, "Please upload the event cover photo"],
  },
  dashboardImage: {
    type: String,
    required: [true, "Please upload the event dashboard photo"],
  },
  organizationId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: Organization,
    required: [true, "Please enter organization Id"],
  },
  isPublished: {
    type: Boolean,
    default: false,
  },

  template: {
    type: String,
  },

  registerUser: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;
