import mongoose, { Schema } from "mongoose";
import { UsersType } from "./types";

const usersSchema = new Schema<UsersType>(
  {
    userName: { type: String },
    role: { type: String },
    deptName: { type: String },
  },
  { timestamps: true }
);

export const users = mongoose.model("users", usersSchema);
