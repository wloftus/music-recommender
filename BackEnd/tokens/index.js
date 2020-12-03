const jwt = require("jsonwebtoken");

// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
module.exports = {
    authenticateToken: (req, res, next) => {
        // Gather the jwt access token from the request header
        const authHeader = req.headers['Authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) {
            return res.sendStatus(401) // if there isn't any token
        }
    
        jwt.verify(token, toString(process.env.ACCESS_TOKEN_SECRET), (err, user) => {
            console.log(err);
            if (err) {
                return res.sendStatus(403);
            }
            
            req.user = user
            next();
        });
    },

    // username is in the form { username: "username" }
    generateAccessToken: (username) => {
        return jwt.sign(username, process.env.TOKEN_SECRET);
    },
}
