const jwt = require("jsonwebtoken")
const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const { Admin,User,Course } = require("../db");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await User.create({
        email,
        password
    })
    res.json({
        msg:"User added successfully"
    })
    
});

router.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password=req.body.password;
    
    const user =await User.findOne({
        email,
        password
    })
    
    if (user){
        const token = jwt.sign({
            email
        },JWT_SECRET);
        res.json({
            success:true,
            token
        })
    }else{
        res.status(411).json({
            success:false,
            msg:"Incorrect username or password"
        })
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
});
module.exports = router;