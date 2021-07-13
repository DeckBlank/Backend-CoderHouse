import mongoose from "mongoose";
import CONFIG from "../development.env";
import MongooseOptions from "./MongooseOptions";

const ConnectionToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(CONFIG.MONGODB_URI, MongooseOptions);
    console.log("Database is Connected");
  } catch (error) {
    throw new Error(error);
  }
};

export default ConnectionToDatabase;
