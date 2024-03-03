const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter the event name"],
  },

  userImage: {
    type: String,
    required: [true, "Please select the event type"],
  },
  postId: {
    type: String,
    required: [true, "Please select the event start date"],
  },

  description: {
    type: String,
    required: [true, "Please select the event start time"],
  },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
