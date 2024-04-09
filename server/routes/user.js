const jwt = require("jsonwebtoken")
const { Router } = require("express");
const { JWT_SECRET,userMiddleware } = require("../middleware/user");
const router = Router();
const { User,Course } = require("../db");
const {newPayment, checkStatus }=require("../PhonePe/PaymentController")

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

router.get('/courses', async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
});

router.post("/purchasedcourses",userMiddleware, (req, res)=>{
    
})

router.put("/buycourse/:id", userMiddleware, async (req, res) => {
    const courseId = req.params.id;
    const userEmail = req.body.userEmail; // Get the user's email from the request body

    try {
        // Find the user by email and update the purchasedCourses array
        const user = await User.findOneAndUpdate(
            { email: userEmail },
            { $addToSet: { purchasedCourses: courseId } },
            { new: true } // Return the updated user document
        );

        if (user) {
            res.status(200).json({
                msg: "Course bought successfully",
            });
        } else {
            // Handle case where user is not found
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        console.error("Error updating user's purchased courses:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
  

router.post('payment',newPayment);
router.post('/status/;txtId', checkStatus);

module.exports = router;