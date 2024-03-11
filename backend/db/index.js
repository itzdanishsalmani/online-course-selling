const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://salmanidanish488:passwordnew@cluster0.vhfr2wr.mongodb.net/project')

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