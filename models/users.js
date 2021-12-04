import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    name: {
      type: String,
      max: 32,
      trim: true,
      required: true,
    },
    age: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    googleId: {
      required: false,
      type: String,
      unique: true,
      sparse: true,

    },
    facebookId: {
      required: false,
      type: String,
      unique: true,
      sparse: true,
    },

    resetLink: {
      type: String,
      default: ''
    },

    resetToken: {
      type: String,
    },
    expiryTime: {
      type: String,
    },
  }
  ,
  { timestamps: true }
);

export const Users = mongoose.model("User", userSchema);
