import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  profilePictureUrl: String,
  reactions: {
    like: Number,
    love: Number,
    haha: Number,
    wow: Number,
    sad: Number,
    angry: Number,
  },
});

export const UserModel = mongoose.model("User", userSchema);
