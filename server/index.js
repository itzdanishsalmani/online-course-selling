const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const cors = require('cors')
require("./db/connect")
app.use(cors({
  origin:"https://hyperdev.vercel.app/"
}
));

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));  

// Verify token middleware
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get("/", (req, res) => {
    res.send("Successfully connected to server.");
  });

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

