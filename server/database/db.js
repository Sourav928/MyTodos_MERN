import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

const Connection = () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("Error while connecting with the database:", error.message);
  });

  db.once("open", () => {
    console.log("Database connected successfully");
  });

  db.on("disconnected", () => {
    console.log("Database disconnected");
  });
};

export default Connection;
