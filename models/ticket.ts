import Event from "./eventModel";

const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  classType: {
    type: String,
    unique: true,
    required: [true, "Please enter classType"],
  },

  price: {
    type: Number,
    unique: true,
    required: [true, "Please enter price"],
  },

  image: {
    type: String,
    required: [true, "Please enter image"],
  },

  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Event,
  },
});

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
