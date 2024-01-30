import app from "./app";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/tk-heart").then(() => {
  console.log("Connected to MongoDB");
  app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
});
