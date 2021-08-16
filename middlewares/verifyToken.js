const { needsRehash } = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken = (res, req, next) => {

    let token = req.header('Authorization') && req.headers.authorization.split('Bearer ')[1];
    if (!token) {
        return res.status(401).json({success: false, message:"No access token found"});
    }
    try {
        const tokenDecode = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);
        req.UserId = tokenDecode.UserId;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({success: false, message:"TOKEN INVAILID"});
    }

}
module.exports = verifyToken;
