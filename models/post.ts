import { m } from "framer-motion";
import Comment from "./comment";
import User from "./userModel";

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter the user name"],
    },

    userImage: {
      type: String,
      required: [true, "Please enter the user image"],
    },
    eventId: {
      type: String,
      required: [true, "Please enter the event id"],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    like: {
      type: Number,
      default: 0,
    },
    likeBy: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: User,
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Comment,
      unique: true,
    },
  },
  {
    timestamps: true, // This option will automatically create `createdAt` and `updatedAt` fields
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
