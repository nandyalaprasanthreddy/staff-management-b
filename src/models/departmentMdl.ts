import mongoose, { Schema } from "mongoose";
import { DeptType } from "./types";

const departmentSchema = new Schema<DeptType>(
  {
    deptName: { type: String, required: true },
  },
  { timestamps: true }
);

export const departments = mongoose.model("departments", departmentSchema);
