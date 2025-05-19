import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUrl: string = process.env.MONGO_URL || "";
  try {
    await mongoose.connect(mongoUrl);
    console.log(`MongoDB connect ${mongoUrl}`);
  } catch (error) {
    console.log("error :", error);
    process.exit(1);
  }
};
