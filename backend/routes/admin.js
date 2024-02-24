const jwt = require("jsonwebtoken")
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin,User,Course } = require("../db");
const {JWT_SECRET} = require("../config");

// Admin Routes
router.post('/signup', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await Admin.create({
        email,
        password
    })
    res.json({
        msg:"Admin added successfully"
    })
    
});

router.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password=req.body.password;
    
    const admin =await User.find({
        email,
        password
    })
    
    if (admin){
        const token = jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg:"Incorrect username or password"
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg:"Course created successfully",courseId : newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
});
module.exports = router;