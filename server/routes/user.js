const jwt = require("jsonwebtoken")
const { Router } = require("express");
const { JWT_SECRET,userMiddleware } = require("../middleware/user");
const router = Router();
const { User,Course } = require("../db");

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

router.post("/buycourse/:courseId", userMiddleware, async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        if (course) {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                // Push the course ID into the user's purchasedCourses array
                user.purchasedCourses.push(course); // Assuming course._id is the course's ObjectId
                await user.save();
                res.json({
                    message: "Course purchased successfully",
                    purchasedCourses: course,
                });
            } else {
                res.status(403).json({ message: "User not found" });
            }
        } else {
            res.status(404).json({ message: "Course not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/courses', async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
});

module.exports = router;