const mongoose = require("mongoose");
import Organization from "./organizationModel";
import User from "./userModel";

const likeSchema = new mongoose.Schema({
  postId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: Organization,
    type: String,
    required: [true, "Please enter post Id"],
  },
  userId: {
    type: String,
    required: [true, "Please enter organization Id"],
  },
});

const Like = mongoose.models.Like || mongoose.model("Like", likeSchema);
export default Like;
