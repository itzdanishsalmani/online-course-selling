require("dotenv").config();
const jwt = require("jsonwebtoken")
const { Router } = require("express");
const { JWT_SECRET, userMiddleware } = require("../middleware/user");
const router = Router();
const { User, Course } = require("../db/model.js");

const paypal = require('paypal-rest-sdk');
// PayPal configuration
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET
});

// Signup
router.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await User.create({
        email,
        password
    })
    res.json({
        msg: "User added successfully"
    })

});

//Signin
router.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({
        email,
        password
    })

    if (user) {
        const token = jwt.sign({
            email
        }, JWT_SECRET);
        res.json({
            success: true,
            token
        })
    } else {
        res.status(411).json({
            success: false,
            msg: "Incorrect username or password"
        })
    }
});

//all courses
router.get('/courses', async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

//get purchased courses
router.get('/purchasedcourse/:email', userMiddleware, async (req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({ email: email }).populate('purchasedCourses');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const purchasedCourses = user.purchasedCourses;

        res.json({
            email: email,
            purchasedCourses: purchasedCourses
        });
    } catch (error) {
        console.error("Error fetching purchased courses:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post('/payment',userMiddleware, async (req, res) => {
    const { selectedCourseId, email } = req.body;

    let data
    try {

        let create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": `https://hyperdev-server.vercel.app/user/success/${selectedCourseId}/${email}`,
                "cancel_url": "https://hyperdev-server.vercel.app/user/failed"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };  
        await paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                console.log(payment);
                data = payment;
                res.json(data);

            }
        });
        
    } catch (error) {
        console.log(error);
    }
})
router.get('/success/:selectedCourseId/:email',userMiddleware, async (req, res) => {
    const selectedCourseId = req.params.selectedCourseId;
    const email = req.params.email;

    await User.findOneAndUpdate({email, 
        $push: {
            purchasedCourses: selectedCourseId
        }
}) 
    try {
        const error = null; // Assuming no error for demonstration purposes

        if (error) {
            console.log(error);
            // Redirect to frontend failure page in case of payment execution error
            return res.redirect("https://hyperdev.vercel.app/failed");
        } else {
            console.log("Execute Payment Response");
            // Redirect to frontend success page after successful payment execution
            return res.redirect("https://hyperdev.vercel.app/success");
        }
    } catch (error) {
        console.log(error);
        // Redirect to frontend failure page in case of any other error
        return res.redirect("https://hyperdev.vercel.app/failed");
    }
});

router.get('/failed',userMiddleware, async (req, res) => {

    return res.redirect("https://hyperdev.vercel.app/failed");
})

module.exports = router;

