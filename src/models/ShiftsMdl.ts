import mongoose, { Schema } from "mongoose";
import { ShiftType } from "./types";

const shiftSchema = new Schema<ShiftType>(
  {
    createdUserId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    shiftName: { type: String },
    shiftTime: {
      shiftCode: { type: String, required: true },
      time: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export const shifts = mongoose.model("shifts", shiftSchema);
