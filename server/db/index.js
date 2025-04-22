import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error(`Mongodb connected failed`, err);
  }
};
