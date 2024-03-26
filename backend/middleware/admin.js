const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')

function adminMiddleware(req,res,next){
    const admin_token = req.headers.authorization;
    const words = admin_token.split(" ");
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
module.exports = adminMiddleware;
