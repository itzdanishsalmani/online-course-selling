const mongoose = require("mongoose");
require("dotenv").config();

const DB_CONNECT = process.env.DB_CONNECT;

mongoose
  .connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
  
//Schemas
const AdminSchema = mongoose.Schema({
    email:String,
    password:String
})

const UserSchema = mongoose.Schema({
    email:String,
    password:String
})

const CourseSchema = mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
})

//model
const Admin = mongoose.model('Admin',AdminSchema)
const User = mongoose.model('User',UserSchema)
const Course = mongoose.model('Course',CourseSchema)

module.exports={
    Admin,
    User,
    Course
}