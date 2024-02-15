import Organization from "./organizationModel";

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, "Please enter the event name"],
  },

  selectedTab: {
    type: String,
    required: [true, "Please select the event type"],
  },
  eventStartDate: {
    type: String,
    required: [true, "Please select the event start date"],
  },
  startTime: {
    type: String,
    required: [true, "Please select the event start time"],
  },
  duration: {
    type: String,
  },
  eventTimeZone: {
    type: String,
    required: [true, "Please select the event time zone"],
  },
  description: {
    type: String,
  },
  postImageLink: {
    type: String,
    required: [true, "Please upload the event cover photo"],
  },
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Organization,
    required: [true, "Please enter organization Id"],
  },
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;
