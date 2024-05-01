const mongoose = require('mongoose')
//Schema
const AdminSchema = mongoose.Schema({
    email:String,
    password:String
})

const UserSchema = mongoose.Schema({
    email:String,
    password:String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
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