const jwt = require('jsonwebtoken');
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: "Authorization token is missing" });
    }

    try {
        const words = token.split(" ");
        const jwtToken = words[1];
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.email) {
            next();
        } else {
            res.status(403).json({ error: "Unauthorized" });
        }
    } catch (error) {
        // Handle JWT verification errors
        console.error("JWT verification error:", error);
        res.status(401).json({ error: "Invalid or expired token" });
    }
}

module.exports = { JWT_SECRET, userMiddleware };
