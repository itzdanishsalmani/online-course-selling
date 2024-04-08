const jwt = require('jsonwebtoken')

require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

function userMiddleware(req,res,next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken,JWT_SECRET);

    if(decodedValue.email){
        next();
    }else{
        res.status(403).json({
            msg:"Unauthorize"
        })
    }
}

module.exports = {JWT_SECRET, userMiddleware }
