// const mongoose = require('mongoose')
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://salmanidanish488:passwordnew@cluster0.vhfr2wr.mongodb.net/project"
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Error in Database", err);
  });

//Schemas
const AdminSchema = mongoose.Schema({
  email: String,
  password: String,
});

const UserSchema = mongoose.Schema({
  email: String,
  password: String,
});

const CourseSchema = mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

//model
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

export { Admin, User, Course };
