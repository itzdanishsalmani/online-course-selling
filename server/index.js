// const jwt = require("jsonwebtoken");
// const express = require('express');
// const bodyParser = require('body-parser');
// const adminRouter = require("./routes/admin")
// const userRouter = require("./routes/user");
// const cors = require('cors')
import jwt from "jsonwebtoken";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
import adminRouter from "./routes/admin.js";
import userRouter from "./routes/user.js";

app.use(cors());
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Verify token middleware
app.use("/admin", adminRouter);
// app.use("/user", userRouter)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
