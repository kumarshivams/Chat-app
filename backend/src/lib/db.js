import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is undefined. Check your .env file.");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // These options are no longer needed in Mongoose 6+
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};
