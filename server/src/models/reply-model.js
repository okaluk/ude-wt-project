const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    parentReplyId: {
      type: Schema.Types.ObjectId,
      ref: "Reply",
      default: null,
    },
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reply",
      },
    ],
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Add creator field
  },
  { timestamps: true },
);

module.exports = mongoose.model("Reply", replySchema);
