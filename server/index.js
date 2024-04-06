const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const cors = require('cors')

app.use(cors())
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));  

// Verify token middleware
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

