require("dotenv").config();
const mongoose = require("mongoose");

const DB_CONNECT = process.env.DB_CONNECT;

mongoose
  .connect(DB_CONNECT)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
  