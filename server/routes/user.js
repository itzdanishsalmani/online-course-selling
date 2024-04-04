// const jwt = require("jsonwebtoken");
// const { Router } = require("express");
// const userMiddleware = require("../middleware/user");
// const { Admin, User, Course } = require("../db");
// const { JWT_SECRET } = require("../config");
// const { newPayment, checkStatus } = require("../PhonePe/PaymentController");
import jwt from "jsonwebtoken";
import { Router } from "express";
import userMiddleware from "../middleware/user.js";
import { Admin, User, Course } from "../db/index.js";
import { JWT_SECRET } from "../config.js";
import { newPayment, checkStatus } from "../PhonePe/PaymentController.js";

// User Routes
const router = Router();
router.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  await User.create({
    email,
    password,
  });
  res.json({
    msg: "User added successfully",
  });
});

router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        email,
      },
      JWT_SECRET
    );
    res.json({
      success: true,
      token,
    });
  } else {
    res.status(411).json({
      success: false,
      msg: "Incorrect username or password",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/purchasedcourses", userMiddleware, (req, res) => {});

router.post("payment", newPayment);
router.post("/status/;txtId", checkStatus);

// module.exports = router;
export default router;
